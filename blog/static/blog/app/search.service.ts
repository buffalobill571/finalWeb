import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { ShortPost }      from './short-post';


@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<ShortPost[]> {
    return this.http
               .get(`api/search/post/?term=${term}`)
               .map((r: Response) => r.json() as ShortPost[]);
  }
}
