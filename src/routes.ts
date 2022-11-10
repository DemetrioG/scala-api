import { Router } from "express";
import Controller from "./controller";

const routes = Router();

routes.get("/", Controller.returnData);

export default routes;
