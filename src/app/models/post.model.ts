export class Post {

    titulo: string;
    imagen: string;
    texto: string;
    autor: string;
    fecha: any;
    categoria: string;

    constructor(pTitulo: string, pImagen: string, pTexto: string, pAutor: string, pFecha: any, pCategoria: string) {
        this.titulo = pTitulo;
        this.imagen = pImagen;
        this.texto = pTexto;
        this.autor = pAutor;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }
}
