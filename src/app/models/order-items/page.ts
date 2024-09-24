export interface Page<T> {
    content: T[];           // Los elementos de la página (ej. lista de OrderItems)
    totalElements: number;   // El número total de elementos en la base de datos
    totalPages: number;      // El número total de páginas
    size: number;            // El tamaño de la página
    number: number;          // La página actual (empieza en 0)
    first: boolean;          // Si es la primera página
    last: boolean;           // Si es la última página
}
  