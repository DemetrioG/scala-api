import { Request, Response } from "express";
import returnData from "../utils/returnData";

const Controller = {
  async returnData(req: Request, res: Response) {
    const response = await returnData();
    res.send(response);
  },
};

export default Controller;
