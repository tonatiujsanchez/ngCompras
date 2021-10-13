import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private categorias:Categoria[] = [
    {
      titulo: 'Mercado',
      total: 650
    },
    {
      titulo: 'Bodega',
      total: 1050
    },
    {
      titulo: 'Chedraui',
      total: 1050
    },
    {
      titulo: 'Fruteria',
      total: 614.10
    }
  ];

  get allCategoria(): Categoria[]{
    return this.categorias;
  }


  constructor() { }
  

  agregarCategoria( nuevaCategoria: Categoria ){
    this.categorias.push( nuevaCategoria )
  }
  eliminarCategoria( idxCategoria: number ){
    this.categorias.splice( idxCategoria, 1 );
  }
  editarCategoria( idxCategoria: number, nuevoTitulo: string ){
    this.categorias[idxCategoria].titulo = nuevoTitulo;
    console.log(this.categorias);
    
  }
}
