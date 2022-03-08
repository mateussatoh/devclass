import { AxiosResponse } from "axios";
import Instance from "./instance";
class AuthService {
   async login(loginData: {
      username: string;
      password: string;
   }): Promise<AxiosResponse> {
      const { username, password } = loginData;
      const { data } = await Instance.authInstance.post("/login", {
         username,
         password,
      });

      return data.access_token;
   }
}

export default new AuthService();
