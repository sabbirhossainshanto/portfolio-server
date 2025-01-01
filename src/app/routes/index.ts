import { Router } from 'express';
import { authRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { skillRoutes } from '../modules/Skill/skill.route';
import { projectRoutes } from '../modules/Project/project.route';
import { experienceRoutes } from '../modules/Experience/experience.route';
import { blogRoutes } from '../modules/Blog/blog.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/skill',
    route: skillRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
  {
    path: '/experience',
    route: experienceRoutes,
  },
  {
    path: '/blog',
    route: blogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
