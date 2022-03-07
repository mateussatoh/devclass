import "./App.less";
import { Layout, Space } from "antd";
import Logo from "./assets/Logo.png";

import { Divider, Image, Collapse, Row, Col, Typography } from "antd";
import Typewriter from "typewriter-effect";
import { ReactNode, useEffect, useState } from "react";

import AngularIcon from "./assets/logos/angular.svg";
import DjangoIcon from "./assets/logos/django.svg";
import DotnetIcon from "./assets/logos/dotnet.svg";
import GoIcon from "./assets/logos/go.svg";
import KotlinIcon from "./assets/logos/kotlin.svg";
import ReactIcon from "./assets/logos/react.svg";
import VueIcon from "./assets/logos/vue.svg";
import NodeIcon from "./assets/logos/nodejs.svg";
import ModulesService from "./services/api.modules";
const { Panel } = Collapse;

const { Header, Footer, Content } = Layout;
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

export default function App() {
   const [modules, setModules] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const modules = await ModulesService.modules();
         setModules(modules);
      }
      fetchData();
   }, []);

   function renderTechIcon(tech: string) {
      switch (tech) {
         case "ReactJS":
            return <Image preview={false} width={32} src={ReactIcon} />;
         case "AngularJS":
            return <Image preview={false} width={32} src={AngularIcon} />;
         case "Kotlin":
            return <Image preview={false} width={32} src={KotlinIcon} />;
         case "Django":
            return <Image preview={false} width={32} src={DjangoIcon} />;
         case "Basico":
            return <Image preview={false} width={32} src={DjangoIcon} />;
         case "VueJS":
            return <Image preview={false} width={32} src={VueIcon} />;
         case "Go":
            return <Image preview={false} width={32} src={GoIcon} />;
         case "NodeJS":
            return <Image preview={false} width={32} src={NodeIcon} />;
         case "React Native":
            return <Image preview={false} width={32} src={ReactIcon} />;
         case ".NET":
            return <Image preview={false} width={32} src={DotnetIcon} />;
      }
   }

   return (
      <Layout>
         <Header>
            <img src={Logo} alt="Logo do devclass" height="100%" />
         </Header>
         <Content className="content">
            <Row style={{ height: "40px" }}></Row>

            <Row>
               <Col span={10} offset={1}>
                  <Title level={2}>
                     A devclass te ensina a desenvolver soluções em software
                     modernas usando
                     <div className="textGradient">
                        <Typewriter
                           options={{
                              strings: [
                                 "ReactJS.",
                                 "Django.",
                                 "AWS.",
                                 "Kotlin.",
                                 "Flutter.",
                                 "AngularJS.",
                                 "React Native.",
                                 ".NET.",
                                 "VueJS.",
                                 "Go.",
                              ],
                              autoStart: true,
                              loop: true,
                           }}
                        />
                     </div>
                  </Title>
                  <Divider />
                  <Title level={4}>
                     Nossos módulos são divididos por temas bem específicos de
                     programação. Aqui, além de verificar o progresso de cada
                     módulo que você está estudando, você pode pesquisar pelos
                     temas que mais te interessam.
                  </Title>
               </Col>
               <Col span={11} offset={1}>
                  <Collapse
                     bordered={false}
                     defaultActiveKey={["1"]}
                     accordion
                     className="scrollableModules"
                  >
                     {modules.map((module: IModule, index) => {
                        const { classes } = module;
                        return (
                           <Panel
                              header={
                                 <Space>
                                    {renderTechIcon(module.tech)}
                                    <Title level={4}>{module.name}</Title>
                                 </Space>
                              }
                              extra={
                                 <Title level={5}>{classes.length} aulas</Title>
                              }
                              key={index}
                           >
                              {classes.map((_class: IClass) => (
                                 <div className="classCard">
                                    <Title level={5}>{_class.name}</Title>
                                    <h4>{_class.date}</h4>
                                 </div>
                              ))}
                           </Panel>
                        );
                     })}
                  </Collapse>
               </Col>
            </Row>
         </Content>
         {/* <Footer>Footer</Footer> */}
      </Layout>
   );
}
