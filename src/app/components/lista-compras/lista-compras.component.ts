import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Compra } from '../../interfaces/compras.interface';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  @Input() compras:any = [];
  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
  }

  eliminarCompra( compra: Compra, idx: number ){
    this._data.eliminarCompra(compra, idx);
    
  }

}
