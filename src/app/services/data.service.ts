import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categorias.interface';
import { Compra } from '../interfaces/compras.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categorias:Categoria[] = [
    // {
    //   titulo: 'Mercado',
    //   total: 0
    // },
    // {
    //   titulo: 'Bodega',
    //   total: 0
    // },
    // {
    //   titulo: 'Chedraui',
    //   total: 0
    // },
    // {
    //   titulo: 'Fruteria',
    //   total: 0
    // }
  ];

  // private compras: Compra[] = [
  //   {
  //     concepto: 'Suavitel',
  //     costo: 86,
  //     categoria: 'Bodega'
  //   },
  //   {
  //     concepto: 'Javon Axión',
  //     costo: 60,
  //     categoria: 'General'
  //   },
  //   {
  //     concepto: 'Café',
  //     costo: 85,
  //     categoria: 'Bodega'
  //   },
  //   {
  //     concepto: 'Cocholate',
  //     costo: 89.50,
  //     categoria: 'Bodega'
  //   },
  //   {
  //     concepto: 'Pasta dental',
  //     costo: 48.90,
  //     categoria: 'Bodega'
  //   },
  //   {
  //     concepto: 'Leche Santa Clara',
  //     costo: 51,
  //     categoria: 'Bodega'
  //   }
  // ];
  private compras: Compra[] = [];

  get allCategoria(): Categoria[]{
    return this.categorias;
  }

  get allcompras(): Compra[]{
    if( this.categoriaActiva === 'General' ){
      return this.compras;
    }    
    return this.compras.filter( compra => compra.categoria === this.categoriaActiva );
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

  

  totalPorCategoria(){
    this.categorias.forEach( cate =>{
      let total: number = 0;
      this.comprasPorCategoria( cate.titulo ).forEach( compra =>{ 
        total = total + compra.costo!;
      })
      
      cate.total = total;
    });
  }

  // Compras
  comprasPorCategoria( categoria: string ): Compra[]{
    return this.compras.filter( compra => compra.categoria === categoria );
  }

  agregarComprar( compra:Compra ){
    const compraNueva = { ...compra, categoria: this.categoriaActiva }
    this.compras.push( compraNueva );
    this.totalPorCategoria();    
  }
  
  eliminarCompra( compra:Compra, idx:number ){
    if( this.categoriaActiva === 'General' ){
      this.compras.splice( idx, 1 );
    }else{
      this.compras.forEach( (comp, index) =>{
        if( comp.concepto === compra.concepto ){
          this.compras.splice( index, 1 );
        }
      })
    }
  }
  

}
