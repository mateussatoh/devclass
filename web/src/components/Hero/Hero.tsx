import { Divider, Row, Col, Typography } from "antd";
import Typewriter from "typewriter-effect";

import "./Hero.less";
const { Title } = Typography;

export default function Hero() {
   return (
      <div className="heroBackground">
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
         </Row>
      </div>
   );
}
