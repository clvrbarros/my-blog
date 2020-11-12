import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = "http://localhost:3000/posts";
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  postMensagem(post: Post) {
    return this.http.post(this.url, post);
  }
}
