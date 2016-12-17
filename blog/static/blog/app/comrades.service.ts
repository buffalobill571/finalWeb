import { Injectable } from '@angular/core';
import { Profile }    from './profile';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ComradesService {
  constructor(private http: Http) {}
  getComrades(): Promise<Profile[]> {
    return this.http.get('/api/comrades/')
                    .toPromise()
                    .then(response => response.json() as Profile[]);
  }
}
