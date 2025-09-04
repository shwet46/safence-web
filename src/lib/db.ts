import { connectToDB } from "./mongoose";
import { User } from "@/models/User";

export const getUserByEmail = async (email: string) => {
  await connectToDB();
  return await User.findOne({ email });
};

export const createUserIfNotExists = async (email: string, name: string, image?: string) => {
  await connectToDB();
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    await User.create({ email, name, username: null, image });
  }
};

export const updateUsername = async (email: string, username: string) => {
  await connectToDB();
  return await User.findOneAndUpdate({ email }, { username }, { new: true });
};