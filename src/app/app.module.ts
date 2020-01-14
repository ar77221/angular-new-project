import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// import { GithubFollowersComponent } from './github-followers/github-followers.component';
// import { GithubFollowersService } from './github-followers.service';
import { PostsComponent } from './posts/posts.component';
// import { PostsService } from './posts.service';
// import { AppErrorHandlerComponent } from './common/app-error-handler.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
  
  ],
})
export class AppModule { }
