import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { fileUploader } from '../../utils/fileUploader';
import parseRequest from '../../utils/parseRequest';
import { experienceValidation } from './experience.validation';
import { ExperienceController } from './experience.controller';

const router = express.Router();

router.post(
  '/create-experience',
  auth('ADMIN'),
  fileUploader.upload.single('file'),
  parseRequest,
  validateRequest(experienceValidation.createExperience),
  ExperienceController.createExperience,
);

router.get('/', ExperienceController.getAllExperience);
router.get('/:experienceId', ExperienceController.getSingleExperience);

router.put(
  '/:experienceId',
  auth('ADMIN'),
  fileUploader.upload.single('file'),
  parseRequest,
  validateRequest(experienceValidation.updateExperience),
  ExperienceController.updateExperience,
);
router.delete(
  '/:experienceId',
  auth('ADMIN'),
  ExperienceController.deleteExperience,
);

export const experienceRoutes = router;
