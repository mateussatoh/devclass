import { Menu } from "antd";
import Logo from "../../assets/Logo.png";

export default function Topbar() {
   return (
      <Menu mode="horizontal" theme="dark">
         <Menu.Item key="icon">
            <img src={Logo} height="70px" alt="Logo do devclass" />
         </Menu.Item>
      </Menu>
   );
}
