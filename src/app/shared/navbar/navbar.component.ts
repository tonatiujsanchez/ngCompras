import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _data: DataService ) { }

  presupuesto!: number;
  inputInactive: boolean = false;

  ngOnInit(): void {
  }

  agregarPresupuesto(){
    if( this.presupuesto === null || this.presupuesto === undefined ){
      this.presupuesto = 0;
      return;
    }

    this._data.presupuesto = this.presupuesto;
    this.inputInactive = true;    
  }

  editarPresupuesto(){
    this.inputInactive = false;
  }

}
