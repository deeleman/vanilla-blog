import { Settings, BlogPost, BlogPosts } from '../data';

export interface Component {
  compile(data: unknown): string;
}
