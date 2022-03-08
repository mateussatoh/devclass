import { useState, useContext } from "react";
import { LoginOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Modal, Button, Input } from "antd";

import "./Topbar.less";
import Logo from "../../assets/Logo.png";
import { Context } from "../../context/AuthContext";

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
   }

   function handleCancel() {
      setVisible(false);
   }

   return (
      <>
         <div className="header">
            <img src={Logo} alt="Logo do devclass" height="100%" />
            <Button
               className="headerRight"
               type="primary"
               shape="round"
               icon={<LoginOutlined />}
               size="large"
               onClick={showModal}
            >
               Fazer login
            </Button>
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
