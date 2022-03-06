import Instance from "./instance";

class UsersService {
   async login(loginData: {
      username: string;
      password: string;
   }): Promise<string> {
      const { username, password } = loginData;
      const { data } = await Instance.authInstance.post("/login", {
         username,
         password,
      });

      return data.access_token;
   }
}

export default new UsersService();
