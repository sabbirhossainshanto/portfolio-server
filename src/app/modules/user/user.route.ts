import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.get('/getMe', auth('ADMIN'), userController.getMe);

export const userRoutes = router;
