import "./ModulesSection.less";

import {
   Divider,
   Image,
   Collapse,
   Row,
   Col,
   Typography,
   Space,
   notification,
} from "antd";
import { useEffect, useState } from "react";
import AngularIcon from "../../assets/logos/angular.svg";
import DjangoIcon from "../../assets/logos/django.svg";
import DotnetIcon from "../../assets/logos/dotnet.svg";
import GoIcon from "../../assets/logos/go.svg";
import KotlinIcon from "../../assets/logos/kotlin.svg";
import ReactIcon from "../../assets/logos/react.svg";
import VueIcon from "../../assets/logos/vue.svg";
import NodeIcon from "../../assets/logos/nodejs.svg";
import LogoSmall from "../../assets/Logo.png";
import { getModulesService } from "../../services/api.modules";

const { Panel } = Collapse;

const { Title } = Typography;

interface IModule {
   name: string;
   tech: string;
   classes: never[];
}

interface IClass {
   name: string;
   date: string;
   durationInMinutes: string;
}

export default function ModulesSection() {
   const [modules, setModules] = useState([
      { name: "", tech: "", classes: [], id: "" },
   ]);

   useEffect(() => {
      async function fetchData() {
         getModulesService()
            .then((modules) => {
               modules.sort(function (a: IModule, b: IModule) {
                  if (a.name < b.name) {
                     return -1;
                  }
                  if (a.name > b.name) {
                     return 1;
                  }
                  return 0;
               });
               setModules(modules);
            })
            .catch(() => {
               notification["error"]({
                  message: "Erro ao tentar receber os módulos da API",
                  description:
                     "Verifique se o banco de dados local e a API foram iniciados.",
               });
            });
      }
      fetchData();
   }, []);

   function renderTechIcon(tech: string) {
      switch (tech) {
         case "ReactJS":
            return <Image preview={false} width={24} src={ReactIcon} />;
         case "AngularJS":
            return <Image preview={false} width={24} src={AngularIcon} />;
         case "Kotlin":
            return <Image preview={false} width={24} src={KotlinIcon} />;
         case "Django":
            return <Image preview={false} width={24} src={DjangoIcon} />;
         case "Basico":
            return <Image preview={false} width={24} src={DjangoIcon} />;
         case "VueJS":
            return <Image preview={false} width={24} src={VueIcon} />;
         case "Go":
            return <Image preview={false} width={24} src={GoIcon} />;
         case "NodeJS":
            return <Image preview={false} width={24} src={NodeIcon} />;
         case "React Native":
            return <Image preview={false} width={24} src={ReactIcon} />;
         case ".NET":
            return <Image preview={false} width={24} src={DotnetIcon} />;
         default:
            return <Image preview={false} width={24} src={LogoSmall} />;
      }
   }

   return (
      <div className="moduleBackground">
         <Row style={{ height: "60px" }}></Row>
         <Row>
            <Col span={10} offset={1}>
               <Title level={2}>
                  Confira os módulos em produção, a sua evolução dev tem dia
                  marcado!
               </Title>
               <Divider />
               <Title level={4}>
                  Escolha a sua stack e de o primeiro passo para se tornar um
                  profisional desejado pelo mercado. São
                  <span className="textRed"> {modules.length} modulos </span>
                  de conteúdo gratuito te esperando.
               </Title>
            </Col>
            <Col span={11} offset={1}>
               <Collapse
                  bordered={false}
                  defaultActiveKey={["0"]}
                  accordion
                  className="scrollableModules"
               >
                  {modules.map((module, index) => {
                     const { classes } = module;
                     return (
                        <Panel
                           header={
                              <Space align="center">
                                 {renderTechIcon(module.tech)}
                                 <Title
                                    level={4}
                                    style={{
                                       width: "30vw",
                                       marginBottom: "0",
                                    }}
                                    ellipsis={{
                                       tooltip: `${module.name}`,
                                    }}
                                 >
                                    {module.name}
                                 </Title>
                              </Space>
                           }
                           extra={
                              <Title level={5}>{classes.length} aulas</Title>
                           }
                           key={index}
                        >
                           {classes.map((_class: IClass) => (
                              <div className="classCard">
                                 <Title
                                    level={5}
                                    style={{ width: "30vw" }}
                                    ellipsis={{
                                       tooltip: `${module.name}`,
                                    }}
                                 >
                                    {_class.name}
                                 </Title>
                                 <h4>{_class.date}</h4>
                              </div>
                           ))}
                        </Panel>
                     );
                  })}
               </Collapse>
            </Col>
         </Row>
         <Row style={{ height: "60px" }}></Row>
      </div>
   );
}
