import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';
import catchAsync from '../../utils/catchAsync';

const getMe = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await userService.getMe(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieve successfully!',
    data: result,
  });
});

export const userController = {
  getMe,
};
