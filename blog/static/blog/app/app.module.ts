import './rxjs-extensions';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { RoutingModule }        from './routing.module';
import { ProfileComponent }     from './profile.component';
import { NewPostComponent }     from './new-post.component';
import { AllPostsComponent }    from './all-posts.component';
import { ShortPipe }            from './short.pipe';
import { MainPostsComponent }   from './main-posts.component';
import { ComradesComponent }    from './comrades.component';
import { SearchComponent }      from './search.component';
import { SinglePostComponent }  from './single-post.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ProfileComponent,
    NewPostComponent,
    AllPostsComponent,
    ShortPipe,
    MainPostsComponent,
    ComradesComponent,
    SearchComponent,
    SinglePostComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
