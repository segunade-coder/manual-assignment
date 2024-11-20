import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  logger.info("middleware auth check");
  if (req.session?.user) next();
  else {
    res.status(403).redirect("/auth-login.html");
    logger.warn("Rejected request. User not authenticated");
  }
}
