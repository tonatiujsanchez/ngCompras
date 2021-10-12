import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorias = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
