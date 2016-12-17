import { Component, OnInit }  from '@angular/core';
import { ComradesService }    from './comrades.service';
import { Profile }            from './profile';


@Component({
  moduleId: module.id,
  selector: 'my-comrades',
  templateUrl: `comrades.component.html`,
  providers: [ ComradesService ]
})
export class ComradesComponent implements OnInit {

  comrades: Profile[];

  constructor(private comradesService: ComradesService) {}

  ngOnInit() {
    this.comradesService.getComrades()
                        .then(comrades => this.comrades = comrades);
  }
}
