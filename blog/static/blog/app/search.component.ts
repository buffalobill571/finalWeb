import { Component, OnInit }      from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { ShortPost }      from './short-post';
import { SearchService }  from './search.service';



@Component({
  moduleId: module.id,
  selector: 'my-search',
  templateUrl: `search.component.html`,
  providers: [ SearchService ],
})
export class SearchComponent implements OnInit {
  items: Observable<ShortPost[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.items = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ?
          this.searchService.search(term) : Observable.of<ShortPost[]>([]));
  }
}
