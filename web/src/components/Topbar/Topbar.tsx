import { useState, useContext } from "react";
import {
   LoginOutlined,
   LockOutlined,
   UserOutlined,
   LogoutOutlined,
} from "@ant-design/icons";
import { Modal, Button, Input, Typography } from "antd";

import "./Topbar.less";
import Logo from "../../assets/Logo.png";
import { Context } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Topbar() {
   const AuthContext = useContext(Context);

   const [visible, setVisible] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   function showModal() {
      setVisible(true);
   }

   async function handleOk(username: string, password: string) {
      setConfirmLoading(true);
      await AuthContext?.login(username, password);
      setConfirmLoading(false);
      setVisible(false);
   }

   function handleCancel() {
      setVisible(false);
   }

   function logout() {
      AuthContext?.logout();
   }

   return (
      <>
         <div className="header">
            <img src={Logo} alt="Logo do devclass" height="100%" />
            <ul className="links">
               <li>
                  <Link to="/" className="link">
                     <h4>Home</h4>
                  </Link>
               </li>
               <li className="link">
                  <Link to="/admin" className="link">
                     <h4>Admin</h4>
                  </Link>
               </li>
            </ul>

            {AuthContext?.isUserAuthenticated ? (
               <Button
                  type="primary"
                  shape="default"
                  className="headerRight"
                  icon={<LogoutOutlined />}
                  size="large"
                  onClick={logout}
               ></Button>
            ) : (
               <Button
                  type="primary"
                  shape="default"
                  className="headerRight"
                  icon={<LoginOutlined />}
                  size="large"
                  onClick={showModal}
               >
                  Fazer login
               </Button>
            )}
         </div>
         <Modal
            title="Faça login usando sua conta devclass"
            visible={visible}
            onOk={() => handleOk(username, password)}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Fazer login"
            cancelText="Cancelar"
            width={400}
         >
            <Input
               suffix={<UserOutlined />}
               placeholder="Seu usuário"
               className="modalInput"
               onChange={(e) => setUsername(e.target.value)}
            />
            <Input
               suffix={<LockOutlined />}
               type="password"
               placeholder="Senha"
               className="modalInput"
               onChange={(e) => setPassword(e.target.value)}
            />
         </Modal>
      </>
   );
}
