import 'rxjs/add/operator/map';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'my-elem',
  templateUrl: `element.component.html`
})
export class ElementComponent implements OnInit {
  new_id: number;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.route.params
              .subscribe(p => this.new_id = +p['id']);
  }
}
