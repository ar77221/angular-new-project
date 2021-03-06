import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

// import { GithubFollowersComponent } from './github-followers/github-followers.component';
// import { GithubFollowersService } from './github-followers.service';
// import { PostsComponent } from './posts/posts.component';
// import { PostService } from './services/post.service';

// import { AppErrorHandlerComponent } from './common/app-error-handler.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, PostsComponent ],
  
  providers: [

  PostService,
  { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
