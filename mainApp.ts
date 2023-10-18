import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { HTTP, mainError } from "./error/error";
import user from "./router/router";

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use("/api", user);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "api is live ❤❤❤...",
      });
    } catch (error) {
      return res.status(404).json({
        message: `api error:${error}`,
      });
    }
  });

  app.all(
    "*",
    (error: mainError, req: Request, res: Response, next: NextFunction) => {
      new mainError({
        name: "Route Error",
        message: `this message is as a result of a wrong route: ${req.originalUrl}`,
        status: HTTP.BAD_REQUEST,
        success: false,
      });
    }
  );
};
