import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import type { Express } from 'express';
import { projectService } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProject(
    req.file as Express.Multer.File,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is created successfully!',
    data: result,
  });
});

const getAllProject = catchAsync(async (req, res) => {
  const result = await projectService.getAllProject();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project are retrieved successfully!',
    data: result,
  });
});
const getSingleProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await projectService.getSingleProject(projectId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is retrieved successfully!',
    data: result,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  const result = await projectService.updateProject(
    projectId,
    req.file as Express.Multer.File,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is updated successfully!',
    data: result,
  });
});
const deleteProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  const result = await projectService.deleteProject(projectId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is deleted successfully!',
    data: result,
  });
});

export const projectController = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
