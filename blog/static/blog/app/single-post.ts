import { Comment } from './comment';
import { Profile } from './profile';


export class SinglePost {
  likes: number;
  comments: Comment[];
  body: string;
  pk: number;
  author: Profile;
  date: string;
}
