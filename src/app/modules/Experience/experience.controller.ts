import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import type { Express } from 'express';
import { experienceService } from './experience.service';

const createExperience = catchAsync(async (req, res) => {
  const result = await experienceService.createExperience(
    req.file as Express.Multer.File,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience is created successfully!',
    data: result,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await experienceService.getAllExperience();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience are retrieved successfully!',
    data: result,
  });
});
const getSingleExperience = catchAsync(async (req, res) => {
  const { experienceId } = req.params;
  const result = await experienceService.getSingleExperience(experienceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience is retrieved successfully!',
    data: result,
  });
});
const updateExperience = catchAsync(async (req, res) => {
  const { experienceId } = req.params;

  const result = await experienceService.updateExperience(
    experienceId,
    req.file as Express.Multer.File,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience is updated successfully!',
    data: result,
  });
});
const deleteExperience = catchAsync(async (req, res) => {
  const { experienceId } = req.params;

  const result = await experienceService.deleteExperience(experienceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience is deleted successfully!',
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
