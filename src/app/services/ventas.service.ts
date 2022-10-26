import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DetalleVenta } from '../models/DetalleVenta';

@Injectable({
  providedIn: 'root'
})

export class VentasService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<DetalleVenta[]>(environment.apiRoute + `detalleVenta`);
  }
  
  findByDate(fecha: String){
    return this.http.get<DetalleVenta[]>(environment.apiRoute + `detalleVenta/findByDate/${fecha}`);
  }

  findByIdVenta(idVenta: Number){
    return this.http.get<DetalleVenta[]>(environment.apiRoute + `detalleVenta/findByIdVenta/${idVenta}`);
  }

}
