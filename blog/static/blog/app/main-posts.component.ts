import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProfileService }         from './profile.service';
import { PostService }            from './post.service';
import { Profile }                from './profile';
import { Post }                   from './post';



@Component({
  moduleId: module.id,
  selector: 'main-posts',
  templateUrl: `main-posts.component.html`,
  providers: [ ProfileService, PostService ],
})
export class MainPostsComponent implements OnInit {
  profile: Profile;
  posts: Post[] = [];
  identify: string;

  constructor(
    private profileService: ProfileService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.identify = p['name'];
      console.log(this.identify);
      this.profileService.getProfile().then(profile => this.profile = profile);
      this.postService.getPosts(this.identify).then(array => this.posts = array);
    })
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }
}
