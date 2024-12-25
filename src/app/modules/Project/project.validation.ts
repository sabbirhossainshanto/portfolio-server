import { z } from 'zod';

const createProject = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required!',
      message: 'Title should be in string!',
    }),
  }),
});
const updateProject = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required!',
        message: 'Title should be in string!',
      })
      .optional(),
  }),
});

export const projectValidation = {
  createProject,
  updateProject,
};
