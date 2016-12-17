import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile }        from './profile';


@Component({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: `profile.component.html`,
  providers: [ ProfileService ],
})
export class ProfileComponent implements OnInit {
  imgUrl: string = "/static/blog/profile.svg";

  profile: Profile;

  constructor(
    private profileService: ProfileService,
  ) {}

  ngOnInit() {
    this.profileService.getProfile().then(profile => this.profile = profile);
  }
}
