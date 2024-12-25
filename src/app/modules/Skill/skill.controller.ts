import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { skillService } from './skill.service';
import type { Express } from 'express';

const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkill(
    req.file as Express.Multer.File,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created successfully!',
    data: result,
  });
});

const getAllSkill = catchAsync(async (req, res) => {
  const result = await skillService.getAllSkill();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill are retrieved successfully!',
    data: result,
  });
});
const getSingleSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;
  const result = await skillService.getSingleSkill(skillId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is retrieved successfully!',
    data: result,
  });
});
const updateSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;

  const result = await skillService.updateSkill(
    skillId,
    req.file as Express.Multer.File,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is updated successfully!',
    data: result,
  });
});
const deleteSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;

  const result = await skillService.deleteSkill(skillId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is deleted successfully!',
    data: result,
  });
});

export const skillController = {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
  getSingleSkill,
};
