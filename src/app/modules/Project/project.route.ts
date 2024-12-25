import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { fileUploader } from '../../utils/fileUploader';
import parseRequest from '../../utils/parseRequest';
import { projectValidation } from './project.validation';
import { projectController } from './project.controller';
const router = express.Router();

router.post(
  '/create-project',
  auth('ADMIN'),
  fileUploader.upload.single('file'),
  parseRequest,
  validateRequest(projectValidation.createProject),
  projectController.createProject,
);

router.get('/', projectController.getAllProject);
router.get('/:projectId', projectController.getSingleProject);

router.put(
  '/:projectId',
  auth('ADMIN'),
  fileUploader.upload.single('file'),
  parseRequest,
  validateRequest(projectValidation.updateProject),
  projectController.updateProject,
);
router.delete('/:projectId', auth('ADMIN'), projectController.deleteProject);

export const projectRoutes = router;
