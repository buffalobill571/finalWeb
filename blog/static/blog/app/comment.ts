import { Profile } from './profile';


export class Comment {
  pk: number;
  author: Profile;
  date: string;
  body: string;
}
