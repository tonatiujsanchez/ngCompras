import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Compra } from '../../interfaces/compras.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('txtConcepto') txtConcepto!: ElementRef<HTMLInputElement>; 

  get presupuesto():number{
    return this._data.presupuesto;
  }

  public nuevaCompra:Compra = {
    concepto: '',
    costo: undefined,
    categoria:''
  }


  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
  }

  agregarCompra(){
    if( this.nuevaCompra.concepto === '' || this.nuevaCompra.costo === undefined ){
      return;
    }

    this._data.agregarComprar( this.nuevaCompra );
    this.nuevaCompra.concepto = '';
    this.nuevaCompra.costo = undefined;
    this.txtConcepto.nativeElement.focus();
  }

}
