import express from 'express';
import auth from '../../middlewares/auth';
import { blogController } from './blog.controller';

const router = express.Router();

router.post('/create-blog', auth('ADMIN'), blogController.createBlog);
router.get('/', blogController.getAllBlog);
router.get('/:blogId', blogController.getSingleBlog);
router.delete('/:blogId', blogController.deleteBlog);

export const blogRoutes = router;
