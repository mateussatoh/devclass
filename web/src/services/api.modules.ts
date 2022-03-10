import axios from "axios";
import Cookies from "js-cookie";
import { SetStateAction } from "react";

const Instance = axios.create({
   baseURL: "http://localhost:3001/modules",
   headers: {
      Authorization: "Bearer " + Cookies.get("access_token"),
   },
});
interface IModule {
   name: string;
   tech: string;
   id: string;
}
async function getModulesService(): Promise<any> {
   const { data } = await Instance.get("");
   return data;
}

async function patchModuleService(module: IModule): Promise<void> {
   const { name, tech, id } = module;
   await Instance.patch(`/${id}`, {
      name: name,
      tech: tech,
   });
}

async function createModuleService(module: IModule): Promise<void> {
   console.log(
      "🚀 ~ file: api.modules.ts ~ line 38 ~ createModuleService ~ module",
      module
   );
   const { name, tech } = module;
   await Instance.post("", {
      name: name,
      tech: tech,
      description: "false",
   });
}

async function deleteModuleService(id: string): Promise<void> {
   await Instance.delete(`/${id}`);
}

export {
   createModuleService,
   deleteModuleService,
   getModulesService,
   patchModuleService,
};
