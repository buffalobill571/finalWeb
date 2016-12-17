import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post }          from './post';
import { Profile } from './profile';
import { PostService } from './post.service';


function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

@Component({
  moduleId: module.id,
  selector: 'all-posts',
  inputs: [ 'posts', 'profile' ],
  providers: [ PostService ],
  templateUrl: `all-posts.component.html`,
})
export class AllPostsComponent  {
  @Input('posts') posts: Post[];
  @Input('profile') profile: Profile;

  owner: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(p => this.owner = capitalizeFirstLetter(p['name']))
  }

  deletePost(post: Post) {
    this.postService.deletePost(post.pk).then(
      () => this.posts.splice(this.posts.indexOf(post), 1)
    );
  }

  imgUrl: string = "/static/blog/profile.svg";
}
