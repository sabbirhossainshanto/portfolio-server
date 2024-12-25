import express from 'express';
import auth from '../../middlewares/auth';
import { skillController } from './skill.controller';
import validateRequest from '../../middlewares/validateRequest';
import { skillValidation } from './skill.validation';
import { fileUploader } from '../../utils/fileUploader';
import parseRequest from '../../utils/parseRequest';
const router = express.Router();

router.post(
  '/create-skill',
  auth('ADMIN'),
  fileUploader.upload.single('file'),
  parseRequest,
  validateRequest(skillValidation.createSkill),
  skillController.createSkill,
);

router.get('/', skillController.getAllSkill);
router.get('/:skillId', skillController.getSingleSkill);

router.put(
  '/:skillId',
  auth('ADMIN'),
  fileUploader.upload.single('file'),
  parseRequest,
  validateRequest(skillValidation.updateSkill),
  skillController.updateSkill,
);
router.delete('/:skillId', auth('ADMIN'), skillController.deleteSkill);

export const skillRoutes = router;
