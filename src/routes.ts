import { Router } from "express";
import Controller from "./controller";

const routes = Router();

routes.get("/folder/list", Controller.returnFolderList); //Ok
routes.get("/folder/list/:id/task", Controller.returnTaskByFolderList); //Ok
routes.get("/space/tag", Controller.returnSpaceTags); //Ok
routes.get("/team", Controller.returnTeam); //Ok
routes.get("/space/:id/folder", Controller.returnFolder); //Ok
routes.get("/task/:id", Controller.returnTask); //Ok (Faltou retornar a chave "attachments")

export default routes;
