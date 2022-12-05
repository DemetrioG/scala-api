import { NextFunction, Request, Response } from "express";

const Auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token || token !== process.env.ACCESS_TOKEN) {
    return res.status(401).send({ error: "Token não autorizado" });
  }
  next();
};

export default Auth;
