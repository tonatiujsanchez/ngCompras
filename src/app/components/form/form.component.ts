import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  get presupuesto():number{
    return this._data.presupuesto;
  }
  constructor(
    private _data: DataService
  ) { }

  ngOnInit(): void {
  }

}
