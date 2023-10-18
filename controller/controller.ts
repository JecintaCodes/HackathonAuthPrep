import { Response, Request } from "express";
import { statusCode } from "../utils/statusCode";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const lock = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, lock);
    // const token = await jwt.sign();

    // const
    return res.status(statusCode.CREATE).json({
      message: `User Registration SuccessFul:`,
      data: "",
    });
  } catch (error: any) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: `User Registration Error: ${error.message}`,
      info: error,
    });
  }
};
