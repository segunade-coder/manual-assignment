import { Router } from "express";
import { rootErrorHandler } from "../root-error-handler";
import { addStudent, getAllStudents } from "../controllers/students";

const router = Router();
router
  .route("/students")
  .get(rootErrorHandler(getAllStudents))
  .post(rootErrorHandler(addStudent));
export default router;
