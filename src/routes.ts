import { Router } from "express";
import Controller from "./controller";
import Auth from "./middlewares/auth";

const routes = Router();

routes.get("/folder/list", [Auth], Controller.returnFolderList);
routes.get("/folder/list/:id/task", [Auth], Controller.returnTaskByFolderList);
routes.get("/space/tag", [Auth], Controller.returnSpaceTags);
routes.get("/team", [Auth], Controller.returnTeam);
routes.get("/space/:id/folder", [Auth], Controller.returnFolder);
routes.get("/task/:id", [Auth], Controller.returnTask);
routes.get("/tasks", [Auth], Controller.returnAllTasks);

export default routes;
