import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  username: string | null;
  password: string | null;
  image?: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, default: null, unique: true, sparse: true },
  password: { type: String, default: null },
  image: String,
});

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);