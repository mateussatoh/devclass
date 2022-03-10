import axios from "axios";
import Cookies from "js-cookie";

interface IUser {
   username: string;
   password: string;
   email: string;
}

const Instance = axios.create({
   baseURL: "http://localhost:3001/users",
   headers: {
      Authorization: "Bearer " + Cookies.get("access_token"),
   },
});
async function createUserService(user: IUser): Promise<void> {
   console.log(
      "🚀 ~ file: api.classes.ts ~ line 34 ~ createClassService ~ _class",
      user
   );
   const { username, password, email } = user;

   await Instance.post("", {
      username: username,
      password: password,
      email: email,
      isAdmin: true,
   });
}

export { createUserService };
