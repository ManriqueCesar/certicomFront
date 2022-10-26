import { Cliente } from "./Cliente";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

export class DetalleVenta {
    id?: number;
    cantidad?: number;
	venta?: Venta;
    producto?: Producto;

}