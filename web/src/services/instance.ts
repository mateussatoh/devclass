import axios from "axios";
import Cookies from "js-cookie";

class Instance {
   constructor(
      private readonly baseUrl: string,
      private readonly token: string | undefined
   ) {}
   authInstance = axios.create({
      baseURL: this.baseUrl + "/auth",
   });
   modulesInstance = axios.create({
      baseURL: this.baseUrl + "/modules",
      headers: { Authorization: "Bearer" + this.token },
   });
   usersInstance = axios.create({
      baseURL: this.baseUrl + "/users",
      headers: { Authorization: "Bearer" + this.token },
   });
   classesInstance = axios.create({
      baseURL: this.baseUrl + "/classes",
      headers: { Authorization: "Bearer" + this.token },
   });
}

export default new Instance(
   "http://localhost:3001",
   Cookies.get("access_token")
);
