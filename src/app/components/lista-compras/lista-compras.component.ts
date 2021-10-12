import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  @Input() compras:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
