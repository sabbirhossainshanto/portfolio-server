import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

router.get('/getMe', auth('ADMIN'), userController.getMe);
router.get('/', auth('ADMIN'), userController.getAllUser);
router.delete('/:id', auth('ADMIN'), userController.deleteUser);
router.patch(
  '/:id',
  auth('ADMIN'),
  validateRequest(userValidation.userRoleUpdateValidationSchema),
  userController.updateRole,
);

export const userRoutes = router;
