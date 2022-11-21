import { Request, Response } from "express";
import selectAllFromDB from "../utils/selectAllFromDB";

const Controller = {
  async returnFolderList(req: Request, res: Response) {
    const response = {
      lists: await selectAllFromDB("clickup_folder_lists"),
    };
    res.status(200).send(response);
  },

  async returnSpaceTags(req: Request, res: Response) {
    const response = {
      tags: await selectAllFromDB("clickup_tags"),
    };
    res.status(200).send(response);
  },

  async returnTeam(req: Request, res: Response) {
    const response = {
      teams: await selectAllFromDB("clickup_team"),
    };
    res.status(200).send(response);
  },
};

export default Controller;
