import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  backendGithubLink: {
    type: String,
  },
  backendLiveLink: {
    type: String,
  },
  details: {
    type: String,
  },
  frontendGithubLink: {
    type: String,
    required: true,
  },
  frontendLiveLink: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
  },
  type: {
    type: String,
    required: true,
  },
});

export const Project = model<IProject>('Project', projectSchema);
