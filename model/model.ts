import mongoose from "mongoose";

interface iUser {
  name?: string;
  email?: string;
  password?: string;
  verify?: boolean;
  token?: string;
}

export 