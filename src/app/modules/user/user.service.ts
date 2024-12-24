import { TUser } from './user.interface';
import { User } from './user.model';
import { JwtPayload } from 'jsonwebtoken';

const getAllUser = async (user: JwtPayload) => {
  const result = await User.find({ email: { $ne: user.email } });
  return result;
};

const getMe = async (user: JwtPayload) => {
  const result = await User.findOne({ email: user.email });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
const updateRole = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const userService = {
  getMe,
  getAllUser,
  deleteUser,
  updateRole,
};
