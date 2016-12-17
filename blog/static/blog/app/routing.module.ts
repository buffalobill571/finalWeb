import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPostsComponent }   from './main-posts.component';
import { SinglePostComponent }  from './single-post.component';


const routes: Routes = [
  { path: '', redirectTo: '/post/all', pathMatch: 'full' },
  { path: 'post/:name', component: MainPostsComponent },
  { path: 'single/:id', component: SinglePostComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
