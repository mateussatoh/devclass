import Instance from "./instance";

interface IUserAuthenticated {
   id: string;
   username: string;
   email: string;
   isAuthenticaded: Boolean;
   access_token: string;
}

class AuthService {
   async login(loginData: {
      username: string;
      password: string;
   }): Promise<IUserAuthenticated> {
      const { username, password } = loginData;
      const { data } = await Instance.authInstance.post("/login", {
         username,
         password,
      });

      return data;
   }
}

export default new AuthService();
