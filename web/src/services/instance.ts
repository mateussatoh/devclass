import axios from "axios";

class Instance {
   constructor(private readonly baseUrl: string) {}
   authInstance = axios.create({
      baseURL: this.baseUrl + "/auth",
   });
   modulesInstance = axios.create({
      baseURL: this.baseUrl + "/modules",
   });
   usersInstance = axios.create({
      baseURL: this.baseUrl + "/users",
   });
   classesInstance = axios.create({
      baseURL: this.baseUrl + "/classes",
   });
}

export default new Instance("http://localhost:3001");
