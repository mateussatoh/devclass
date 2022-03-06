import { SetStateAction } from "react";
import Instance from "./instance";

class ModulesService {
   async modules(): Promise<SetStateAction<never[]>> {
      const { data } = await Instance.modulesInstance.get("");
      return data;
   }
}
export default new ModulesService();
