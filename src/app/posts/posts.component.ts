import { PostService } from './services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


// doing is to use this http class to send a request to that backend. this is how we get data from the server..
export class PostsComponent implements OnInit {

posts: any [];

  constructor( private service: PostService) {

   }

  ngOnInit() {
   this.service.getPosts()
    .subscribe (
    response => {

      this.posts = response.json();
    });
  }

// here need to call the server
//using post and this will send an http post request to the server.
 
//  creating data, using the HTTP post method
 
  createPost(input: HTMLInputElement) {

    let post= { title: input.value };

    input.value = '';

    // here first argument passing url for this method and the second argument ned to pass the body of the request 
    
    // JSON.stringify which is a native object in JavaScript
    // we pass the post objcet, returing type of this post method, and this returns an observable of response. 


   this.service.createPost(post)
      .subscribe (
      response =>  {

// using .notation to access this property
        post['id']= response.json().id;
        this.posts.splice(0, 0 , post); 
         
      },
      (error: AppError) => {
        if (error.instanceof BadInput) {
          //  this.form.setErrors(error.originalError);

        }
        // this.form.setErrors(error.json());
        else throw error;
        
      });
  }
  // using the http object, to send an http request to update the data. 
  //two choices either call this.http.put 
  // or call the patch method..
// using the patch method to update only a few properties in an object. 
//instead of sending that object to a server, we send only the properties that sould be modified..
//each post has property called isRead

//we got error 404 not found, when we need to ues the patch or put methods, you need to reference a specific post. 
//we are referencing the entire post collection.
//changing this url, (?)and /, then the ideal the post that we're patching 
// in the console this fake API is returing the same object 
  updatePost(post) {
   this.service.updatePost(post)
     .subscribe (
     response => {
       console.log(response.json());
     });

  }

  // need to reference a specific post
  deletePost(post) {

  this.service.deletePost(345)
   .subscribe (
   response => {
      let index = this.posts.indexOf(post);

      this.posts.splice(index, 1);

   },
   (error: AppError) => {
     if(error instanceof NotFoundError)
     alert('This post has already been deleted');

     else throw error;

      
     
     
     
   
   });
  }

}

