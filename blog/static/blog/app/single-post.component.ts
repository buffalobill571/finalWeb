import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SinglePost }             from './single-post';
import { SinglePostService }      from './single-post.service';
import { ProfileService }         from './profile.service';
import { Profile }                from './profile';
import { Comment }                from './comment';


@Component({
  moduleId: module.id,
  selector: 'single-post',
  templateUrl: `single-post.component.html`,
  providers: [ SinglePostService, ProfileService ],
})
export class SinglePostComponent implements OnInit {

  profile: Profile;
  singlePost: SinglePost;
  postId: number;

  constructor(
    private route: ActivatedRoute,
    private service: SinglePostService,
    private profileService: ProfileService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.postId = +p['id'];
      this.profileService.getProfile()
                         .then(r => this.profile = r)
                         .then(() => {
                           this.service.getSinglePost(this.postId)
                                       .then(response => this.singlePost = response);
                         })
    })
  }

  addComment(body: string): void {
    this.service.addComment(this.singlePost.pk, body)
                .then(comment => this.singlePost.comments.push(comment));
  }

  deletePost() {
    this.service.deletePost(this.singlePost.pk)
                .then(() => this.goBack());
  }

  deleteComment(comment: Comment) {
    this.service.deleteComment(comment.pk)
                .then(() => {
                  this.singlePost.comments.splice(this.singlePost.comments.indexOf(comment), 1)
                })
  }

  goBack(): void {
    this.location.back();
  }
}
