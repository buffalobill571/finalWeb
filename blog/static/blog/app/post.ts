import { Profile } from './profile';

export class Post {
  pk: number;
  body: string;
  date: string;
  author: Profile;
}
