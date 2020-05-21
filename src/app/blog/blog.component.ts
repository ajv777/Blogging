import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];

  constructor(private postServices: PostsService) { 
    this.arrPost = [];
    // localStorage.setItem('postGuardados', JSON.stringify(this.arrPost));
  }

  async ngOnInit() {
    this.arrPost = await this.postServices.getAllPost();
    // console.log(this.arrPost);
  }

  async onClickTodos() {
    this.arrPost = await this.postServices.getAllPost();
  }

  async onClickCategoria($event) {
    this.arrPost = await this.postServices.getPostByCategoria($event.target.value);
    // console.log(this.arrPost);
  }

}
