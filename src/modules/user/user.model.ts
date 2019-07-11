import { Model, model, Schema } from "mongoose";
import { IUser } from "./user.type";

export const userSchema: Schema = new Schema({
  password: {
    type: String
  },
  created_date: {
    default: Date.now,
    type: Date
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  first_name: {
    required: "Enter a first name",
    type: String
  },
  last_name: {
    required: "Enter a last name",
    type: String
  }
});

export const userModel: Model<IUser> = model<IUser>("User", userSchema);
