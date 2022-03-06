import "./App.less";
import { Layout } from "antd";
import Logo from "./assets/Logo.png";

import "./App.less";
import { Divider, Image, Collapse, Row, Col, Typography } from "antd";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

import AWSIcon from "./assets/logos/aws.svg";
import AngularIcon from "./assets/logos/angular.svg";
import DjangoIcon from "./assets/logos/django.svg";
import DotnetIcon from "./assets/logos/dotnet.svg";
import FlutterIcon from "./assets/logos/flutter.svg";
import GoIcon from "./assets/logos/go.svg";
import KotlinIcon from "./assets/logos/kotlin.svg";
import ReactIcon from "./assets/logos/react.svg";
import VueIcon from "./assets/logos/vue.svg";
import NestIcon from "./assets/logos/nest.svg";
import ModulesService from "./services/api.modules";
const { Panel } = Collapse;

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export default function App() {
   const [modules, setModules] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const modules = await ModulesService.modules();
         console.log(
            "🚀 ~ file: App.tsx ~ line 32 ~ fetchData ~ modules",
            modules
         );
         setModules(modules);
      }
      fetchData();
   }, []);

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
                  <Collapse bordered={false} defaultActiveKey={["1"]} accordion>
                     <Panel
                        header={<Title level={4}>React</Title>}
                        extra={
                           <Image preview={false} width={32} src={ReactIcon} />
                        }
                        key="1"
                     >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque, beatae.
                     </Panel>
                  </Collapse>
               </Col>
            </Row>
         </Content>
         {/* <Footer>Footer</Footer> */}
      </Layout>
   );
}
