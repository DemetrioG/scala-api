import { Router } from "express";
import Controller from "./controller";

const routes = Router();

routes.get("/folder/list", Controller.returnFolderList);
routes.get("/folder/list/:id/task", Controller.returnTaskByFolderList);
routes.get("/space/tag", Controller.returnSpaceTags);
routes.get("/team", Controller.returnTeam);
routes.get("/space/:id/folder", Controller.returnFolder);
routes.get("/task/:id", Controller.returnTask);
routes.get("/tasks", Controller.returnAllTasks);

export default routes;
