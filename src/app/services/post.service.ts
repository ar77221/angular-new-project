import { BadInput } from './common/bad-input';
import {NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';
import { ErrorHandler } from './common/app-error-handler';
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';



@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

getPosts() {
  return this.http.get(this.url);
  .catch(this.handleError);
}

// createPost(post) {
//   return this.http.post(this.url, JSON.stringify(post))
//        .catch((error: Response) => {

//          if (error.status === 400)

// return Observable.throw

//        });
// }
//  }
// pass an application specific error object
//this 400, bad request is a common type of error
createPost(post) {
  return this.http.post(this.url, JSON.stringify(post));
  .catch(this.handleError);
}
updatePost(post) {
  return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
   .catch(this.handleError);
}
deletePost(id) {
   return this.http.delete(this.url + '/' + id)
   .catch(this.handleError);
}

// Extract a separate private method called handler error
private handleError(error: Response) {

 if(error.status === 400)
     return Observable.throw(new BadInput(error.json()));

if ( error.status === 404)
     Observable.throw
     return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
}
}