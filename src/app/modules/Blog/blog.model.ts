import { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>({
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

export const Blog = model<IBlog>('Blog', blogSchema);
