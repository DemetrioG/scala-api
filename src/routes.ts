import { Router } from "express";
import Controller from "./controller";

const routes = Router();

routes.get("/folder/list", Controller.returnFolderList);
routes.get("/space/tag", Controller.returnSpaceTags);
routes.get("/team", Controller.returnTeam);

export default routes;
