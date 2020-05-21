import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { POSTS } from './db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPost: Post[];

  constructor() {
    // console.log('Arranca el Servicio');
    this.arrPost = POSTS
    // console.log (this.arrPost)
  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);
    });
  }

  // Agregar post 

  agregarPost({titulo, imagen, texto, autor, fecha, categoria }): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const newPost = new Post (titulo, imagen, texto, autor, fecha, categoria);
      this.arrPost.push(newPost);
      resolve(this.arrPost);
    });
  }

  // Filtro por categoría

  getPostByCategoria(pCategoria: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado: Post[] = [];
      for (let post of this.arrPost) {
        if (post.categoria === pCategoria) {
          arrFiltrado.push(post);
        }
      }
      resolve(arrFiltrado);
    });
  }


}
