import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";

import AuthService from "../services/api.auth";
import { useNavigate } from "react-router-dom";
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
      const authResponse = await AuthService.login({ username, password });
      setUserAuthenticated(authResponse);
      const { access_token, ...user } = authResponse;
      Cookies.set("access_token", access_token);
      Cookies.set("user", user);
      if (authResponse) {
         setIsUserAuthenticated(true);
      }
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
