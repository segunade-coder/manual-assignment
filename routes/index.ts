import { Router } from "express";
import { rootErrorHandler } from "../root-error-handler";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
} from "../controllers/students";

const router = Router();
router
  .route("/students")
  .get(rootErrorHandler(getAllStudents))
  .post(rootErrorHandler(addStudent))
  .delete(rootErrorHandler(deleteStudent));
export default router;
