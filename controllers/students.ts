import { Request, Response } from "express";
import db from "../utils/mysqlApi";
import { returnJSONError, returnJSONSuccess } from "../utils/functions";
export type Students = {
  id: string;
  name: string;
  adm: string;
  phone: string;
  program: "M" | "E";
  ref: string;
};
export const getAllStudents = async (req: Request, res: Response) => {
  const students = (await db.getAll("students")) as Students[];
  return returnJSONSuccess(res, { data: students });
};
export const addStudent = async (req: Request, res: Response) => {
  const { adm, phone, name, program, ref } = req.body;
  if (!adm && !phone && !name && !program) {
    return returnJSONError(res, { message: "Invalid input" });
  }
  const getById = (await db.getByColumnName("adm", adm, "students")) as any[];
  if (getById.length > 0) {
    return returnJSONError(res, { message: "Already registered" });
  }
  await db.insert("students", {
    name,
    adm,
    program,
    phone,
    ref: !!ref && ref !== "" ? ref : "156",
  });
  return returnJSONSuccess(res);
};
export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) {
    return returnJSONError(res, { message: "Invalid Request Parameters" });
  }
  await db.delete("students", id);
  return returnJSONSuccess(res);
};
