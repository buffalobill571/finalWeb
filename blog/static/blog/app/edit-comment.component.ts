import { Component, OnInit }  from '@angular/core';
import { Location }           from '@angular/common';
import { ActivatedRoute }     from '@angular/router';

import { SinglePostService }  from './single-post.service';
import { Comment }            from './comment';


@Component({
  moduleId: module.id,
  selector: 'edit-comment',
  templateUrl: 'edit-comment.component.html',
  providers: [ SinglePostService ]
})
export class EditCommentComponent implements OnInit {
  comment: Comment;
  commentId: number;
  error: boolean = false;

  constructor(
    private service: SinglePostService,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.commentId = +p['id'];
      this.service.getComment(this.commentId).then(p => this.comment = p);
    })
  }

  update(body: string) {
    if (body === "") {
      this.error = true;
    } else {
      this.service
          .updateComment(this.commentId, body)
          .then(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }
}
