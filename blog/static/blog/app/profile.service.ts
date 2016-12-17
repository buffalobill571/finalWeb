import { Injectable } from '@angular/core';
import { Profile }    from './profile';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProfileService {
  constructor(private http: Http) {}
  getProfile(): Promise<Profile> {
    return this.http.get('/api/profile/')
                    .toPromise()
                    .then(response => response.json() as Profile);
  }
}
