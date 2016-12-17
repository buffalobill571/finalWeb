import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Comment } from './comment';
import { SinglePost }    from './single-post';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SinglePostService {
  constructor(private http: Http) {}

  getSinglePost(pk: number): Promise<SinglePost> {
    return this.http.get(`/api/single/${pk}`)
                    .toPromise()
                    .then(response => response.json() as SinglePost);
  }

  addComment(pk: number, body: string): Promise<Comment> {
    return this.http
               .post(`/api/comment/add/${pk}`, JSON.stringify({'body': body}))
               .toPromise()
               .then(response => response.json() as Comment);
  }
}
