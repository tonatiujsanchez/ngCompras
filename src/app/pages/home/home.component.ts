import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorias = this._data.allCategoria;

  get presupuesto(): number{
    return this._data.presupuesto | 0;
  }
  get restante(): number{
    return this._data.restante | 0;
  }

  compras: any = [
    {
      concepto: 'Suavitel',
      costo: 86,
      categoria: 'Bodega'
    },
    {
      concepto: 'Javon Axión',
      costo: 60,
      categoria: 'Bodega'
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
  ]
  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
  }

}
