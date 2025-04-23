import { Router, Request, Response, NextFunction } from "express";


export const routes = Router();

routes.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    res.send("Test");
  }
);