import { Component, OnInit }          from '@angular/core';
import { Location }           from '@angular/common';
import { ActivatedRoute }     from '@angular/router';

import { SinglePost }         from './single-post';
import { SinglePostService }  from './single-post.service';


@Component({
  moduleId: module.id,
  selector: 'edit-post',
  templateUrl: 'edit-post.component.html',
  providers: [ SinglePostService ],
})
export class EditPostComponent implements OnInit {
  error: boolean = false;
  post: SinglePost;
  postId: number;

  constructor(
    private service: SinglePostService,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.postId = +p['id'];
      this.service.getSinglePost(this.postId).then(p => this.post = p);
    })
  }

  update(body: string) {
    if (body === "") {
      this.error = true;
    } else {
      this.service
          .updatePost(this.postId, body)
          .then(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }
}
