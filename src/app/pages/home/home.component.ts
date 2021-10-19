import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorias = this._data.allCategoria;
  compras = this._data.allcompras;


  get totalCompras(): number{
    return this._data.total;
  }

  get presupuesto(): number{
    return this._data.presupuesto;
  }
  get restante(): number{    
    return this._data.restante;
  }

  get categoriaActiva(): string{
    return this._data.categoriaActiva;
  }


  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
  }

  seleccionaCategoria( categoria: string ){

    if( this._data.categoriaActiva === categoria ){
      this._data.categoriaActiva = 'General';
      return;
    }else{
      this._data.categoriaActiva = categoria;
    }

  }

}
