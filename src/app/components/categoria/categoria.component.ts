import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: any = {}

  // get totalCategoria(): number{
  //   let total: number = 0;
    
  //   this._data.comprasPorCategoria( this.categoria.titulo ).forEach( compra =>{ 
  //     total = total + compra.costo!;
  //    });

  //   return total;
  // }

  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
    this._data.totalPorCategoria( this.categoria.titulo );
  }

}
