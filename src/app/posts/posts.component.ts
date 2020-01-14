import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


// doing is to use this http class to send a request to that backend. this is how we get data from the server..
export class PostsComponent implements OnInit {

posts: any [];
private url= 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: Http) {

http.get(this.url)
    .subscribe(response => {

      this.posts = response.json();
    });
   }

  ngOnInit() {
    
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


    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response =>  {

// using .notation to access this property
        post['id']= response.json().id;
        this.posts.splice(0, 0 , post);
      
           
         
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
   this.http.patch(this.url, JSON.stringify({ isRead: true }))
     .subscribe(response => {
       console.log(response.json());

       
     })

  }

}

