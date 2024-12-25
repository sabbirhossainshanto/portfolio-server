import { User } from './user.model';
import { JwtPayload } from 'jsonwebtoken';

const getMe = async (user: JwtPayload) => {
  const result = await User.findOne({ email: user.email });
  return result;
};

export const userService = {
  getMe,
};
