import { Injectable } from '@angular/core';
import { Profile }    from './profile';
import { Post } from './post';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PostService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}
  getPosts(name: string): Promise<Post[]> {
    return this.http.get(`/api/postsof/${name}/`)
                    .toPromise()
                    .then(response => response.json() as Post[]);
  }
  newPost(body: string): Promise<Post> {
    return this.http.post('/api/newpost/', JSON.stringify({'body': body}), {headers: this.headers})
                    .toPromise()
                    .then((response) => response.json() as Post);
  }
  deletePost(pk: number): Promise<void> {
    return this.http.post(`/api/deletepost/${pk}/`, '', {headers: this.headers})
                    .toPromise()
                    .then(() => null);
  }
}
