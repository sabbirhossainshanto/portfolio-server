import { fileUploader } from '../../utils/fileUploader';
import type { Express } from 'express';
import { Experience } from './experience.model';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IExperience } from './experience.interface';

const createExperience = async (
  file: Express.Multer.File,
  payload: IExperience,
) => {
  if (file) {
    const { secure_url } = await fileUploader.uploadToCloudinary(file);
    payload.companyPhoto = secure_url;
  }
  const result = await Experience.create(payload);

  return result;
};

const getAllExperience = async () => {
  return await Experience.find();
};

const getSingleExperience = async (id: string) => {
  const experience = await Experience.findById(id);
  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience is not found');
  }
  return await Experience.findById(id);
};

const updateExperience = async (
  id: string,
  file: Express.Multer.File,
  payload: Partial<IExperience>,
) => {
  const experience = await Experience.findById(id);
  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience is not found');
  }
  if (file) {
    const { secure_url } = await fileUploader.uploadToCloudinary(file);
    payload.companyPhoto = secure_url;
  }
  return await Experience.findByIdAndUpdate(id, payload, { new: true });
};

const deleteExperience = async (id: string) => {
  const experience = await Experience.findById(id);
  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, 'Experience is not found');
  }
  return await Experience.findByIdAndDelete(id);
};

export const experienceService = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
