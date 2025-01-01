import { fileUploader } from '../../utils/fileUploader';
import { IProject } from './project.interface';
import type { Express } from 'express';
import { Project } from './project.model';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';

const createProject = async (file: Express.Multer.File, payload: IProject) => {
  if (file) {
    const { secure_url } = await fileUploader.uploadToCloudinary(file);
    payload.image = secure_url;
  }
  const result = await Project.create(payload);

  return result;
};

const getAllProject = async () => {
  return await Project.find();
};

const getSingleProject = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project is not found');
  }
  return await Project.findById(id);
};

const updateProject = async (
  id: string,
  file: Express.Multer.File,
  payload: Partial<IProject>,
) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project is not found');
  }
  if (file) {
    const { secure_url } = await fileUploader.uploadToCloudinary(file);
    payload.image = secure_url;
  }
  return await Project.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProject = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project is not found');
  }
  return await Project.findByIdAndDelete(id);
};

export const projectService = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
