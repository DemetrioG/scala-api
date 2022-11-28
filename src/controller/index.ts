import { Request, Response } from "express";
import scanItemsFromDB from "../utils/scanItemsFromDB";
import selectAllFromDB from "../utils/selectAllFromDB";
import selectItemFromDB from "../utils/selectItemFromDB";

const Controller = {
  async returnFolderList(req: Request, res: Response) {
    const response = {
      lists: await selectAllFromDB("clickup_folder_lists"),
    };
    res.status(200).send(response);
  },

  async returnTaskByFolderList(req: Request, res: Response) {
    const params = {
      FilterExpression: "#list.#id = :id",
      ExpressionAttributeNames: {
        "#list": "list",
        "#id": "id",
      },
      ExpressionAttributeValues: {
        ":id": req.params.id,
      },
    };
    const response = await scanItemsFromDB("clickup_tasks", params);
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

  async returnFolder(req: Request, res: Response) {
    const response = {
      folders: await selectItemFromDB("clickup_folders", "id", req.params.id),
    };
    res.status(200).send(response);
  },

  async returnTask(req: Request, res: Response) {
    const response = await selectItemFromDB(
      "clickup_tasks",
      "id",
      req.params.id
    );
    res.status(200).send(response);
  },
};

export default Controller;
