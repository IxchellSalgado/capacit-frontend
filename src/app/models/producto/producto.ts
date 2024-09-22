export class Producto {
    id: number;
    nombre: string;
    precio: number;
    total: number;
    stock: number;
    proveedorId: number | null = null;
}
