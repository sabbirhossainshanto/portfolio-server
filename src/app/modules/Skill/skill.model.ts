import { Schema, model } from 'mongoose';
import { ISkill } from './skill.interface';

const skillSchema = new Schema<ISkill>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

export const Skill = model<ISkill>('skill', skillSchema);
