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
const getAllUser = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await userService.getAllUser(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User are retrieve successfully!',
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.deleteUser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is deleted successfully!',
    data: result,
  });
});
const updateRole = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userService.updateRole(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User role is updated successfully!',
    data: result,
  });
});

export const userController = {
  getMe,
  getAllUser,
  deleteUser,
  updateRole,
};
