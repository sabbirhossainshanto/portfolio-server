import { z } from 'zod';

const createExperience = z.object({
  body: z.object({
    companyName: z.string({
      required_error: 'companyName is required!',
      message: 'companyName should be in string!',
    }),
    role: z.string({
      required_error: 'role is required!',
      message: 'role should be in string!',
    }),
    joinDate: z.string({
      required_error: 'joinDate is required!',
      message: 'joinDate should be in string!',
    }),
    resignDate: z.string({
      required_error: 'resignDate is required!',
      message: 'resignDate should be in string!',
    }),
    location: z.string({
      required_error: 'location is required!',
      message: 'location should be in string!',
    }),
    responsibilities: z.string({
      required_error: 'responsibilities is required!',
      message: 'responsibilities should be in string!',
    }),
    technologiesUsed: z.string({
      required_error: 'technologiesUsed is required!',
      message: 'technologiesUsed should be in string!',
    }),
  }),
});
const updateExperience = z.object({
  body: z.object({
    companyName: z
      .string({
        required_error: 'companyName is required!',
        message: 'companyName should be in string!',
      })
      .optional(),
    role: z
      .string({
        required_error: 'role is required!',
        message: 'role should be in string!',
      })
      .optional(),
    joinDate: z
      .string({
        required_error: 'joinDate is required!',
        message: 'joinDate should be in string!',
      })
      .optional(),
    resignDate: z
      .string({
        required_error: 'resignDate is required!',
        message: 'resignDate should be in string!',
      })
      .optional(),
    location: z
      .string({
        required_error: 'location is required!',
        message: 'location should be in string!',
      })
      .optional(),
    responsibilities: z
      .string({
        required_error: 'responsibilities is required!',
        message: 'responsibilities should be in string!',
      })

      .optional(),

    technologiesUsed: z
      .string({
        required_error: 'technologiesUsed is required!',
        message: 'technologiesUsed should be in string!',
      })

      .optional(),
  }),
});

export const experienceValidation = {
  createExperience,
  updateExperience,
};
