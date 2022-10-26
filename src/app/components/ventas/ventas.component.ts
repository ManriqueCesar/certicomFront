import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from 'src/app/models/DetalleVenta';
import { VentasService } from 'src/app/services/ventas.service';

import * as moment from 'moment';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventasList: DetalleVenta[] = [];
  ventaDetalleLst: DetalleVenta[] = [];
  dateValue : any;
  temp: any;
  dateFormat : any
  displayBasic: boolean = false;

  constructor(private ventasService: VentasService) {
  }

  ngOnInit(): void {
    this.getAllVentas();
  }

  getAllVentas() {
    this.ventasList ? this.ventasList.length = 0 : this.ventasList = this.ventasList;
    this.ventasService.getAll().subscribe(x => {
      this.temp = x;
      this.ventasList = this.temp.response;
      console.log(this.ventasList);
    });
  }

  findByDate() {
    this.dateValue ? this.dateFormat = moment(this.dateValue).format('YYYY-MM-DD') : this.dateFormat = null;

    this.ventasService.findByDate(this.dateFormat).subscribe(x => {
      this.ventasList ? this.ventasList.length = 0 : this.ventasList = this.ventasList;
      this.temp = x;
      this.ventasList = this.temp.response;
      console.log(this.ventasList);
    });
  }


  findByIdVenta(idVenta: Number) {
    console.log(idVenta);

    this.ventasService.findByIdVenta(idVenta).subscribe(x => {
      this.temp = x;
      if(this.temp.status == 404){
        console.log("A")
        this.ventaDetalleLst ? this.ventaDetalleLst.length = 0 : this.ventaDetalleLst = this.ventaDetalleLst;
      }
      else{
        console.log("b")
        this.ventaDetalleLst = this.temp.response;
      }
  
      console.log(this.ventaDetalleLst);
    });
  }


  btnModalDetalleVenta(idVenta: number) {
    this.findByIdVenta(idVenta);
    this.displayBasic = true;

  }

 

  

 

}
