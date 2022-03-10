import "./Admin.less";
import { Button, Input, Layout, notification, Select, Table } from "antd";

import Topbar from "../../components/Topbar";
import {
   EditOutlined,
   DeleteOutlined,
   PlusCircleOutlined,
} from "@ant-design/icons";
import { Option } from "antd/lib/mentions";
import { useEffect, useState } from "react";

import {
   createModuleService,
   deleteModuleService,
   getModulesService,
   patchModuleService,
} from "../../services/api.modules";
import {
   createClassService,
   deleteClassService,
   getClassesService,
   patchClassService,
} from "../../services/api.classes";

import Modal from "antd/lib/modal/Modal";

interface IModule {
   id: string;
   name: string;
   tech: string;
}
interface IClass {
   id: string;
   name: string;
   date: string;
   durationInMinutes: number;
   modulesId: string;
   modulesName?: string;
}

const { Content } = Layout;
export default function Home() {
   const [selectedView, setSelectedView] = useState("modules");
   const [modules, setModules] = useState([
      { name: "", tech: "", classes: [], id: "" },
   ]);
   const [classes, setClasses] = useState([]);
   const [moduleModalVisible, setModuleModalVisible] = useState(false);
   const [classModalVisible, setClassModalVisible] = useState(false);
   const [createModuleModal, setCreateModuleModal] = useState(false);
   const [createClassModal, setCreateClassModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const [sortedInfo, setSortedInfo] = useState({ order: "", columnKey: "" });

   function handleTableChange(pagination: any, filters: any, sorter: any) {
      setSortedInfo(sorter);
   }

   function clearFilters() {
      setSortedInfo({ order: "", columnKey: "" });
   }

   const [selectedClass, setSelectedClass] = useState({
      id: "",
      name: "",
      date: "",
      durationInMinutes: 0,
      modulesId: "",
   });
   const [selectedModule, setSelectedModule] = useState({
      id: "",
      name: "",
      tech: "",
   });

   useEffect(() => {
      async function fetchData() {
         const apiModules = await getModulesService();
         const apiClasses = await getClassesService();

         const classesWithModules = apiClasses.map((_class: IClass) => {
            const otherSubject = apiModules.find(
               (module: IModule) => module.id === _class.modulesId
            );

            return { ..._class, modulesName: otherSubject.name };
         });

         setModules(apiModules);
         setClasses(classesWithModules);
      }
      fetchData();
   }, []);

   async function hydrate() {
      const apiModules = await getModulesService();
      const apiClasses = await getClassesService();

      const classesWithModules = apiClasses.map((_class: IClass) => {
         const otherSubject = apiModules.find(
            (module: IModule) => module.id === _class.modulesId
         );

         return { ..._class, modulesName: otherSubject.name };
      });

      setModules(apiModules);
      setClasses(classesWithModules);
   }

   const modulesColumns: any = [
      {
         title: "Nome",
         dataIndex: "name",
         key: "name",
         sorter: (a: IModule, b: IModule) => a.name.length - b.name.length,
         sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      },
      {
         title: "Tech",
         dataIndex: "tech",
         key: "tech",
         sorter: (a: IModule, b: IModule) => a.tech.length - b.tech.length,
         sortOrder: sortedInfo.columnKey === "tech" && sortedInfo.order,
      },
      {
         key: "actions",
         render: (module: IModule) => {
            return (
               <>
                  <Button
                     type="primary"
                     shape="default"
                     className="headerRight"
                     icon={<DeleteOutlined />}
                     size="large"
                     onClick={() => {
                        deleteModule(module);
                     }}
                  ></Button>
                  <Button
                     type="primary"
                     shape="default"
                     className="headerRight"
                     icon={<EditOutlined />}
                     size="large"
                     onClick={() => openModuleModal(module)}
                  ></Button>
               </>
            );
         },
      },
   ];

   const classColumns: any = [
      {
         title: "Módulo",
         dataIndex: "modulesName",
         key: "modulesName",
         defaultSortOrder: "descend",
         sorter: (a: any, b: any) =>
            a.modulesName.length - b.modulesName.length,
         sortOrder: sortedInfo.columnKey === "modulesName" && sortedInfo.order,
      },
      {
         title: "Nome",
         dataIndex: "name",
         key: "name",
         sorter: (a: IClass, b: IClass) => a.name.length - b.name.length,
         sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      },
      {
         title: "Data",
         dataIndex: "date",
         key: "date",
         sorter: (a: IClass, b: IClass) => a.date.length - b.date.length,
         sortOrder: sortedInfo.columnKey === "date" && sortedInfo.order,
      },
      {
         title: "Duração (min)",
         dataIndex: "durationInMinutes",
         key: "duration",
         sorter: (a: IClass, b: IClass) =>
            a.durationInMinutes - b.durationInMinutes,
         sortOrder: sortedInfo.columnKey === "duration" && sortedInfo.order,
      },
      {
         key: "actions",
         render: (_class: IClass) => {
            return (
               <>
                  <Button
                     type="primary"
                     shape="default"
                     className="headerRight"
                     icon={<DeleteOutlined />}
                     size="large"
                     onClick={() => {
                        deleteClass(_class);
                     }}
                  ></Button>
                  <Button
                     type="primary"
                     shape="default"
                     className="headerRight"
                     icon={<EditOutlined />}
                     size="large"
                     onClick={() => openClassModal(_class)}
                  ></Button>
               </>
            );
         },
      },
   ];

   function openClassModal(selectedClass: IClass) {
      setSelectedClass(selectedClass);
      setClassModalVisible(true);
   }

   async function patchClass(selectedClass: IClass) {
      setIsLoading(true);
      patchClassService(selectedClass)
         .then(async () => {
            notification["success"]({
               message: "Modificado com sucesso.",
               description: "",
            });
            hydrate();
            closeModal();
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao tentar modificar a aula",
               description:
                  "Verifique se o banco de dados local e a API foram iniciados. Você não pode criar uma aula com o mesmo nome.",
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   async function deleteClass(selectedClass: IClass) {
      console.log(
         "🚀 ~ file: Admin.tsx ~ line 247 ~ deleteClass ~ selectedClass",
         selectedClass
      );
      setIsLoading(true);
      deleteClassService(selectedClass.id)
         .then(async () => {
            notification["success"]({
               message: "Deletado com sucesso.",
               description: "",
            });
            hydrate();
            closeModal();
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao deletar a aula",
               description:
                  "Verifique se o banco de dados local e a API foram iniciados.",
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   async function deleteModule(selectedModule: IModule) {
      setIsLoading(true);
      deleteModuleService(selectedModule.id)
         .then(() => {
            notification["success"]({
               message: "Deletado com sucesso.",
               description: "",
            });
            hydrate();
            closeModal();
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao deletar a aula",
               description: `Verifique se o banco de dados local e a API foram iniciados. 
                  Você não pode deletar um módulo com aulas presentes e criar um módulo com nome repetido!!`,
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   async function createClass(selectedClass: IClass) {
      setIsLoading(true);
      createClassService(selectedClass)
         .then(() => {
            notification["success"]({
               message: "Criado com sucesso.",
               description: "",
            });
            hydrate();
            closeModal();
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao tentar criar a aula",
               description:
                  "Verifique se o banco de dados local e a API foram iniciados. Você não pode criar uma aula com o mesmo nome.",
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   function openModuleModal(selectedModule: IModule) {
      setSelectedModule(selectedModule);
      setModuleModalVisible(true);
   }

   async function patchModule(selectedModule: IModule) {
      setIsLoading(true);

      patchModuleService(selectedModule)
         .then(() => {
            notification["success"]({
               message: "Modificado com sucesso.",
               description: "",
            });
            hydrate();
            closeModal();
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao tentar modificar o módulo",
               description: `Verifique se o banco de dados local e a API foram iniciados. 
               Você não pode deletar um módulo com aulas presentes e criar um módulo com nome repetido!!`,
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   async function createModule(selectedModule: IModule) {
      setIsLoading(true);

      createModuleService(selectedModule)
         .then(() => {
            notification["success"]({
               message: "Criado com sucesso.",
               description: "",
            });
            hydrate();
            closeModal();
         })
         .catch(() => {
            notification["error"]({
               message: "Erro ao tentar criar o módulo",
               description: `Verifique se o banco de dados local e a API foram iniciados. 
               Você não pode deletar um módulo com aulas presentes e criar um módulo com nome repetido!!`,
            });
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   function closeModal() {
      setSelectedModule({ id: "", name: "", tech: "" });
      setSelectedClass({
         id: "",
         name: "",
         date: "",
         durationInMinutes: 0,
         modulesId: "",
      });
      setClassModalVisible(false);
      setModuleModalVisible(false);
      setCreateClassModal(false);
      setCreateModuleModal(false);
   }

   function setModule(selectedView: string) {
      setSelectedView(selectedView);
      clearFilters();
   }

   return (
      <>
         <Layout>
            <Topbar />
            <Content className="content">
               <div>
                  <Select
                     className="select"
                     defaultValue="modules"
                     style={{ width: 120 }}
                     onChange={setModule}
                  >
                     <Option value="modules">Módulo</Option>
                     <Option value="classes">Aula</Option>
                  </Select>
                  <Button
                     type="primary"
                     shape="default"
                     className="select"
                     icon={<PlusCircleOutlined />}
                     size="large"
                     onClick={() => {
                        if (selectedView === "modules") {
                           setCreateModuleModal(true);
                        } else {
                           setCreateClassModal(true);
                        }
                     }}
                  >
                     Adicionar
                  </Button>
               </div>
               {selectedView === "modules" ? (
                  <Table
                     className="table"
                     dataSource={modules}
                     columns={modulesColumns}
                     onChange={handleTableChange}
                  />
               ) : (
                  <Table
                     className="table"
                     dataSource={classes}
                     columns={classColumns}
                     onChange={handleTableChange}
                  />
               )}
            </Content>
         </Layout>
         <Modal
            destroyOnClose={true}
            title="Alterar módulo"
            visible={moduleModalVisible}
            onOk={() => patchModule(selectedModule)}
            onCancel={closeModal}
            okText="Salvar alterações"
            cancelText="Cancelar"
            width={400}
         >
            <Input
               placeholder="Novo nome"
               className="modalInput"
               defaultValue={selectedModule.name}
               onChange={(e) =>
                  setSelectedModule((pre) => {
                     return {
                        ...pre,
                        name: e.target.value,
                     };
                  })
               }
            />
            <Input
               placeholder="Nova tech"
               className="modalInput"
               defaultValue={selectedModule.tech}
               onChange={(e) =>
                  setSelectedModule((pre) => {
                     return {
                        ...pre,
                        tech: e.target.value,
                     };
                  })
               }
            />
         </Modal>
         <Modal
            destroyOnClose={true}
            title="Alterar aula"
            visible={classModalVisible}
            onOk={() => patchClass(selectedClass)}
            // confirmLoading={confirmLoading}
            onCancel={closeModal}
            okText="Salvar alterações"
            cancelText="Cancelar"
            width={400}
         >
            <Input
               placeholder="Novo nome"
               className="modalInput"
               defaultValue={selectedClass.name}
               onChange={(e) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        name: e.target.value,
                     };
                  })
               }
            />
            <Input
               placeholder="Nova data"
               className="modalInput"
               defaultValue={selectedClass.date}
               onChange={(e) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        date: e.target.value,
                     };
                  })
               }
            />
            <Input
               placeholder="Nova duração"
               className="modalInput"
               defaultValue={selectedClass.durationInMinutes}
               onChange={(e) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        durationInMinutes: Number(e.target.value),
                     };
                  })
               }
            />
         </Modal>
         <Modal
            destroyOnClose={true}
            title="Criar módulo"
            visible={createModuleModal}
            onOk={() => createModule(selectedModule)}
            confirmLoading={isLoading}
            onCancel={closeModal}
            okText="Criar"
            cancelText="Cancelar"
            width={400}
         >
            <Input
               placeholder="Nome"
               className="modalInput"
               onChange={(e) =>
                  setSelectedModule((pre) => {
                     return {
                        ...pre,
                        name: e.target.value,
                     };
                  })
               }
            />
            <Input
               placeholder="Tech"
               className="modalInput"
               onChange={(e) =>
                  setSelectedModule((pre) => {
                     return {
                        ...pre,
                        tech: e.target.value,
                     };
                  })
               }
            />
         </Modal>
         <Modal
            destroyOnClose={true}
            title="Criar aula"
            visible={createClassModal}
            onOk={() => createClass(selectedClass)}
            confirmLoading={isLoading}
            onCancel={closeModal}
            okText="Criar"
            cancelText="Cancelar"
            width={400}
         >
            <Input
               placeholder="Nome"
               className="modalInput"
               onChange={(e) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        name: e.target.value,
                     };
                  })
               }
            />
            <Input
               placeholder="Data"
               className="modalInput"
               onChange={(e) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        date: e.target.value,
                     };
                  })
               }
            />
            <Input
               placeholder="Duração"
               className="modalInput"
               onChange={(e) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        durationInMinutes: Number(e.target.value),
                     };
                  })
               }
            />
            <Select
               defaultValue="selectAValue"
               className="select"
               style={{ width: 340 }}
               onChange={(modulesId) =>
                  setSelectedClass((pre) => {
                     return {
                        ...pre,
                        modulesId: modulesId,
                     };
                  })
               }
            >
               <Option disabled value="selectAValue">
                  Selecione um módulo
               </Option>
               ;
               {modules.map((module, index) => {
                  return <Option value={module.id}>{module.name}</Option>;
               })}
            </Select>
         </Modal>
      </>
   );
}
