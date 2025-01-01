import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { blogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlog(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is created successfully!',
    data: result,
  });
});
const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogService.getAllBlog();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog are retrieved successfully!',
    data: result,
  });
});
const getSingleBlog = catchAsync(async (req, res) => {
  const result = await blogService.getSingleBlog(req.params.blogId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is retrieved successfully!',
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const result = await blogService.deleteBlog(req.params?.blogId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is deleted successfully!',
    data: result,
  });
});

export const blogController = {
  createBlog,
  getAllBlog,
  deleteBlog,
  getSingleBlog,
};
