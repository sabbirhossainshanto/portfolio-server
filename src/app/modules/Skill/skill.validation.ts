import { z } from 'zod';

const createSkill = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required!',
      message: 'Title should be in string!',
    }),
  }),
});
const updateSkill = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required!',
        message: 'Title should be in string!',
      })
      .optional(),
  }),
});

export const skillValidation = {
  createSkill,
  updateSkill,
};
