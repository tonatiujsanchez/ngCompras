import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Categoria } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @ViewChild('txtCategoria') txtCategoria!:ElementRef<HTMLInputElement>;

  isFocus: boolean = false;
  categorias: Categoria[] = this._data.allCategoria;
  
  nuevaCategoria: Categoria = {
    titulo: '',
    total: 0
  }

  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
  }

  aceptarCategoria(){
    this.txtCategoria.nativeElement.focus();

    if( this.nuevaCategoria.titulo.trim() === '' ){
      return;
    }

    if( this.nuevaCategoria.id != undefined ){
      this._data.editarCategoria( this.nuevaCategoria.id, this.nuevaCategoria.titulo );
      this.nuevaCategoria.id = undefined;
      this.nuevaCategoria.titulo = '';
    }else{
      this.agregarCategoria();
    }
  }

  agregarCategoria(){
    const nuevaCategoria:Categoria = { ...this.nuevaCategoria }
    this._data.agregarCategoria( nuevaCategoria );
    this.nuevaCategoria.titulo = '';   
  }

  modificarCategoria( idxCategoria: number ){    
    this.nuevaCategoria = {...this.categorias[idxCategoria], id:idxCategoria};
  }

  eliminarCategoria( idxCategoria: number ){
    this._data.eliminarCategoria( idxCategoria );
    this.nuevaCategoria.id = undefined;
    this.nuevaCategoria.titulo = '';
  }

}
