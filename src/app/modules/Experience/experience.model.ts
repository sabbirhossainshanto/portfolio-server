import { Schema, model } from 'mongoose';
import { IExperience } from './experience.interface';

const experienceSchema = new Schema<IExperience>({
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  companyPhoto: {
    type: String,
  },
  joinDate: {
    type: String,
    required: true,
  },
  resignDate: {
    type: String,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  technologiesUsed: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export const Experience = model<IExperience>('Experience', experienceSchema);
