import axios from "axios";
import { SetStateAction } from "react";
import Cookies from "js-cookie";

const Instance = axios.create({
   baseURL: "http://localhost:3001/classes",
   headers: {
      Authorization: "Bearer " + Cookies.get("access_token"),
   },
});

interface IClass {
   id: string;
   name: string;
   date: string;
   durationInMinutes: number;
   moduleId: string;
}
async function getClassesService(): Promise<SetStateAction<never[]>> {
   const { data } = await Instance.get("");
   return data;
}

async function patchClassService(_class: IClass): Promise<void> {
   const { name, date, durationInMinutes, id } = _class;
   await Instance.patch(`/${id}`, {
      name: name,
      date: date,
      durationInMinutes: durationInMinutes,
   });
}

async function createClassService(_class: IClass): Promise<void> {
   console.log(
      "🚀 ~ file: api.classes.ts ~ line 34 ~ createClassService ~ _class",
      _class
   );
   const { name, date, durationInMinutes, moduleId } = _class;

   await Instance.post("", {
      name: name,
      date: date,
      durationInMinutes: durationInMinutes,
      modulesId: moduleId,
   });
}

async function deleteClassService(id: string): Promise<void> {
   await Instance.delete(`/${id}`);
}

export {
   getClassesService,
   patchClassService,
   createClassService,
   deleteClassService,
};
