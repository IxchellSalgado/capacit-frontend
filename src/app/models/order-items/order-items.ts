export class OrderItems {
    id: number;
    pedidoId: number | null = null; 
    productoId: number | null = null; 
    precio: number;
    quantity: number;
}
