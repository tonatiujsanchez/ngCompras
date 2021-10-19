import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categorias.interface';
import { Compra } from '../interfaces/compras.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categorias:Categoria[] = [
    {
      titulo: 'Mercado',
      total: 0
    },
    {
      titulo: 'Bodega',
      total: 0
    },
    {
      titulo: 'Chedraui',
      total: 0
    },
    {
      titulo: 'Fruteria',
      total: 0
    }
  ];

  private compras: Compra[] = [
    {
      concepto: 'Suavitel',
      costo: 86,
      categoria: 'Bodega'
    },
    {
      concepto: 'Javon Axión',
      costo: 60,
      categoria: 'General'
    },
    {
      concepto: 'Café',
      costo: 85,
      categoria: 'Bodega'
    },
    {
      concepto: 'Cocholate',
      costo: 89.50,
      categoria: 'Bodega'
    },
    {
      concepto: 'Pasta dental',
      costo: 48.90,
      categoria: 'Bodega'
    },
    {
      concepto: 'Leche Santa Clara',
      costo: 51,
      categoria: 'Bodega'
    }
  ];

  get allCategoria(): Categoria[]{
    return this.categorias;
  }

  get allcompras(): Compra[]{
    return this.compras;
  }


  public presupuesto!: number;

  get total(): number{
    let totalCompras: number = 0;
    this.compras.forEach(compra => {
      totalCompras = totalCompras + (compra.costo || 0);
    });  
    return totalCompras;
  }

  get restante(): number{    
    return (this.presupuesto - this.total);
  }

  public categoriaActiva:string = 'General';

  constructor() { }
  
  // Categorias 
  agregarCategoria( nuevaCategoria: Categoria ){
    this.categorias.push( nuevaCategoria );
  }
  eliminarCategoria( idxCategoria: number ){
    this.categorias.splice( idxCategoria, 1 );
  }
  editarCategoria( idxCategoria: number, nuevoTitulo: string ){
    this.categorias[idxCategoria].titulo = nuevoTitulo;
  }

  
  // TODO: Obtener el total por categoria y asignarlo a la categoria correcpondiente del Arreglo de Categorias. 
  totalPorCategoria( categoria: string ){

    if( categoria === 'General' ){
      return;
    }
    // let categoriaFilter = this.categorias.filter( category => category.titulo === categoria );

    this.categorias.forEach( cate =>{
      if( cate.titulo === categoria ){
        
      }
    });

    
    // Compras
    this.comprasPorCategoria( categoria ).forEach( compra => {

      this.categorias.forEach( cate =>{
        if( cate.titulo === categoria ){
          cate.total = cate.total + (compra.costo || 0);
        }
      }) 

    })
     console.log(this.categorias);
     
  }

  comprasPorCategoria( categoria: string ): Compra[]{
    return this.compras.filter( compra => compra.categoria === categoria );
  }

  agregarComprar( compra:Compra ){
    const compraNueva = { ...compra, categoria: this.categoriaActiva }
    this.compras.push( compraNueva );
  }
  
  

}
