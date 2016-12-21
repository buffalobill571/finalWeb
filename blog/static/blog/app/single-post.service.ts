import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Comment } from './comment';
import { SinglePost }    from './single-post';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SinglePostService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getSinglePost(pk: number): Promise<SinglePost> {
    return this.http.get(`/api/single/${pk}/`)
                    .toPromise()
                    .then(response => response.json() as SinglePost);
  }

  addComment(pk: number, body: string): Promise<Comment> {
    return this.http
               .post(`/api/comment/add/${pk}/`, JSON.stringify({'body': body}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Comment);
  }

  updatePost(pk: number, body: string): Promise<void> {
    return this.http
               .post(`/api/edit/post/${pk}/`, JSON.stringify({'body': body}), {headers: this.headers})
               .toPromise();
  }

  deletePost(pk: number): Promise<void> {
    return this.http.post(`/api/deletepost/${pk}/`, '', {headers: this.headers})
                    .toPromise();
  }

  getComment(pk: number): Promise<Comment> {
    return this.http
               .get(`/api/comment/get/${pk}/`, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Comment);
  }

  deleteComment(pk: number): Promise<void> {
    return this.http
               .post(`/api/comment/delete/${pk}/`, '', {headers: this.headers})
               .toPromise();
  }

  updateComment(pk: number, body: string): Promise<void> {
    return this.http
               .post(`/api/comment/update/${pk}/`, JSON.stringify({'body': body}), {headers: this.headers})
               .toPromise();
  }
}
