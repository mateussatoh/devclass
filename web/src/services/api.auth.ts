import axios from "axios";

const Instance = axios.create({
   baseURL: "http://localhost:3001/auth",
});
interface IUserAuthenticated {
   id: string;
   username: string;
   email: string;
   isAuthenticaded: Boolean;
   access_token: string;
}

async function loginService(loginData: {
   username: string;
   password: string;
}): Promise<IUserAuthenticated> {
   const { username, password } = loginData;
   const { data } = await Instance.post("/login", {
      username,
      password,
   });

   return data;
}

export { loginService };
