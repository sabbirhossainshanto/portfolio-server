import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { fileUploader } from '../../utils/fileUploader';
import { ISkill } from './skill.interface';
import { Skill } from './skill.model';
import type { Express } from 'express';

const createSkill = async (file: Express.Multer.File, payload: ISkill) => {
  const isSkillExist = await Skill.findOne({ title: payload.image });

  if (isSkillExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This skill is already exist');
  }
  if (file) {
    const { secure_url } = await fileUploader.uploadToCloudinary(file);
    payload.image = secure_url;
  }
  const result = await Skill.create(payload);
  return result;
};

const getAllSkill = async () => {
  return await Skill.find();
};

const getSingleSkill = async (id: string) => {
  const skill = await Skill.findById(id);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill is not found');
  }
  return await Skill.findById(id);
};

const updateSkill = async (
  id: string,
  file: Express.Multer.File,
  payload: Partial<ISkill>,
) => {
  const skill = await Skill.findById(id);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill is not found');
  }
  if (file) {
    const { secure_url } = await fileUploader.uploadToCloudinary(file);
    payload.image = secure_url;
  }
  return await Skill.findByIdAndUpdate(id, payload, { new: true });
};

const deleteSkill = async (id: string) => {
  const skill = await Skill.findById(id);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, 'Skill is not found');
  }
  return await Skill.findByIdAndDelete(id);
};

export const skillService = {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
  getSingleSkill,
};
