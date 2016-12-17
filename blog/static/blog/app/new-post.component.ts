import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from './post.service';

@Component({
  moduleId: module.id,
  selector: 'new-post',
  templateUrl: `new-post.component.html`,
  providers: [ PostService ],
  outputs: [ 'postRequest' ]
})
export class NewPostComponent  {
  @Output('postRequest') postRequest = new EventEmitter<any>();

  constructor(private postService: PostService) {}

  newPost(body: string) {
    this.postService.newPost(body)
                    .then(post => this.postRequest.emit(post));
  }

  rows: number = 1;
  onFocus() {
    this.rows = 4;
  }
  onBlur() {
    this.rows = 1;
  }
}
