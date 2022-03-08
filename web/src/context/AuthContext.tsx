import Cookies from "js-cookie";
import { createContext, useState } from "react";

import AuthService from "../services/api.auth";

interface IUserAuthenticated {
   id: string;
   username: string;
   email: string;
   isAuthenticaded: Boolean;
   access_token: string;
}

interface IContext {
   userAuthenticated: IUserAuthenticated | null;
   login: (username: string, password: string) => Promise<void>;
}

interface Props {
   children?: JSX.Element;
}

const Context = createContext<null | IContext>(null);

function AuthProvider({ children }: Props) {
   const [userAuthenticated, setUserAuthenticated] =
      useState<IUserAuthenticated | null>(null);

   async function login(username: string, password: string) {
      const authResponse = await AuthService.login({ username, password });
      setUserAuthenticated(authResponse);
      console.log(
         "🚀 ~ file: AuthContext.tsx ~ line 32 ~ login ~ authResponse",
         authResponse
      );
      Cookies.set("access_token", authResponse.access_token);
   }
   return (
      <Context.Provider value={{ userAuthenticated, login }}>
         {children}
      </Context.Provider>
   );
}

export { Context, AuthProvider };
