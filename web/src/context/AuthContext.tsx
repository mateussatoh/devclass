import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";

import { loginService } from "../services/api.auth";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
interface IUserAuthenticated {
   id: string;
   username: string;
   email: string;
   isAuthenticaded: Boolean;
   access_token: string;
}

interface IContext {
   userAuthenticated: IUserAuthenticated | null;
   isUserAuthenticated: Boolean;
   login: (username: string, password: string) => Promise<void>;
   logout: () => void;
}

interface Props {
   children?: JSX.Element;
}

const Context = createContext<null | IContext>(null);

function AuthProvider({ children }: Props) {
   const navigate = useNavigate();
   const [userAuthenticated, setUserAuthenticated] =
      useState<IUserAuthenticated | null>(null);
   const [isUserAuthenticated, setIsUserAuthenticated] =
      useState<Boolean>(false);
   useEffect(() => {
      const user = Cookies.get("user");
      if (user) {
         setIsUserAuthenticated(true);
      }
   }, []);

   async function login(username: string, password: string) {
      loginService({ username, password })
         .then((authResponse) => {
            setUserAuthenticated(authResponse);
            const { access_token, ...user } = authResponse;
            Cookies.set("access_token", access_token);
            Cookies.set("user", user);
            if (authResponse) {
               setIsUserAuthenticated(true);
            }
            notification["success"]({
               message: "Você foi autenticado.",
               description: "A área do admin foi liberada.",
            });
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao tentar autenticar",
               description:
                  "Verifique se o banco de dados local e a API foram iniciados, e se o usuário e a senha estão corretos.",
            });
         });
   }

   function logout() {
      setIsUserAuthenticated(false);
      Cookies.set("access_token", "");
      Cookies.set("user", "");
      navigate("/", { replace: false });
   }
   return (
      <Context.Provider
         value={{ userAuthenticated, isUserAuthenticated, login, logout }}
      >
         {children}
      </Context.Provider>
   );
}

export { Context, AuthProvider };
