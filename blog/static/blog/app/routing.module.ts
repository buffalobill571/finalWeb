import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPostsComponent }   from './main-posts.component';
import { SinglePostComponent }  from './single-post.component';
import { EditPostComponent }    from './edit-post.component';
import { EditCommentComponent } from './edit-comment.component';


const routes: Routes = [
  { path: '', redirectTo: '/post/all', pathMatch: 'full' },
  { path: 'post/:name', component: MainPostsComponent },
  { path: 'single/:id', component: SinglePostComponent },
  { path: 'edit/post/:id', component: EditPostComponent },
  { path: 'edit/comment/:id', component: EditCommentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
