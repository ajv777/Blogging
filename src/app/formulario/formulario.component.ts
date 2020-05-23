import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
  
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  currentDate: Date;

  constructor(private postService: PostsService, private router: Router) {
    this.currentDate = new Date();
      this.formulario = new FormGroup({
        titulo: new FormControl('', [
          Validators.required
        ]),
        imagen: new FormControl('', [
          Validators.required
        ]),
        texto: new FormControl('', [
          Validators.required
        ]),
        autor: new FormControl('', [
          Validators.required
        ]),
        categoria: new FormControl('', [
          Validators.required
        ]),
      });
    // }
   }
  

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.formulario.value);
    let nuevoPost: Post = this.formulario.value;
    nuevoPost.fecha = this.currentDate;
    this.postService.agregarPost(nuevoPost);
    this.router.navigate(['/blog']);
    
    // Guardar en LocalStorage
    // const postStr = JSON.stringify(this.formulario.value);
    // localStorage.setItem('postGuardados', postStr);
    // console.log (postStr)
  }

}
