import { useState, useContext } from "react";
import {
   LoginOutlined,
   LockOutlined,
   UserOutlined,
   LogoutOutlined,
} from "@ant-design/icons";
import { Modal, Button, Input, Typography, notification } from "antd";

import "./Topbar.less";
import Logo from "../../assets/Logo.png";
import { Context } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import { createUserService } from "../../services/api.users";
export default function Topbar() {
   const AuthContext = useContext(Context);

   const [visible, setVisible] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [newAccountModal, setNewAccountModal] = useState(false);

   function showModal() {
      setVisible(true);
   }

   async function handleOk(username: string, password: string) {
      setConfirmLoading(true);
      await AuthContext?.login(username, password);
      setConfirmLoading(false);
      setVisible(false);
   }

   async function handleNewAccount(
      username: string,
      email: string,
      password: string
   ) {
      setConfirmLoading(true);
      createUserService({ username, email, password })
         .then(() => {
            notification["success"]({
               message: "Conta criada com sucesso.",
               description: "",
            });
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao criar usuário",
               description:
                  "Verifique se o banco de dados local e a API foram iniciados.",
            });
         })
         .finally(() => {
            setConfirmLoading(false);
            setNewAccountModal(false);
         });
   }

   function handleCancel() {
      setVisible(false);
      setNewAccountModal(false);
   }

   function logout() {
      AuthContext?.logout();
   }

   return (
      <>
         <div className="header">
            <img src={Logo} alt="Logo do devclass" height="100%" />

            {AuthContext?.isUserAuthenticated ? (
               <>
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

                  <Button
                     type="primary"
                     shape="default"
                     className="headerRight"
                     icon={<LogoutOutlined />}
                     size="large"
                     onClick={logout}
                  ></Button>
               </>
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
            <h4
               className="link"
               onClick={() => {
                  setVisible(false);
                  setNewAccountModal(true);
               }}
            >
               Não tenho uma conta
            </h4>
         </Modal>
         <Modal
            title="Crie uma conta devclass"
            visible={newAccountModal}
            onOk={() => handleNewAccount(username, email, password)}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Criar conta"
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
               suffix={<UserOutlined />}
               placeholder="Seu email"
               className="modalInput"
               type="email"
               onChange={(e) => setEmail(e.target.value)}
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
