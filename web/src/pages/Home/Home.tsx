import "./Home.less";
import { Layout } from "antd";

import Topbar from "../../components/Topbar";
import Hero from "../../components/Hero";
import ModulesSection from "../../components/ModulesSection";

const { Content } = Layout;

export default function Home() {
   return (
      <Layout>
         <Topbar />
         <Content className="content">
            <Hero />
            <ModulesSection />
         </Content>
      </Layout>
   );
}
