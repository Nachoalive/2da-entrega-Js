// let productos = [
//     { nombre: "MOCHILA BALDER", precio: 129990, categoria: "Mochila", stock: 10, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "MOCHILA FENRIR", precio: 134990, categoria: "Mochila", stock: 9, fechaEntrada: new Date('2024-07-23') },

// ];



// // Función para calcular los días en stock desde la fecha de entrada
// function calcularDiasEnStock(fechaEntrada) {
//     const fechaActual = new Date();
//     const diferenciaTiempo = fechaActual - fechaEntrada;
//     const diasEnStock = Math.floor(diferenciaTiempo / (1000 * 3600 * 24)); // Convertir de milisegundos a días
//     return diasEnStock;
// }

// // Agregar el cálculo de días en stock a cada producto
// productos.forEach(producto => {
//     producto.diasEnStock = calcularDiasEnStock(producto.fechaEntrada);
// });

// // Agregar el nuevo producto "BOLSO SKADI" usando push
// productos.push({
//     nombre: "BOLSO SKADI",
//     precio: 9990,
//     categoria: "Bolso",
//     stock: 12,
//     fechaEntrada: new Date('2024-07-23'),
//     diasEnStock: calcularDiasEnStock(new Date('2024-07-23'))
// });

// // Función para mostrar los productos con sus días en stock
// function mostrarProductos() {
//     productos.forEach(producto => {
//         console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}, Categoría: ${producto.categoria}, Stock: ${producto.stock}, Días en stock: ${producto.diasEnStock}`);
//     });
// }

// // Mostrar los productos en la consola, incluyendo el nuevo producto agregado
// mostrarProductos();
class Producto {
    constructor(nombre, precio, categoria, stock, fechaEntrada) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
    this.stock= stock;
    this.fechaEntrada =  new Date(fechaEntrada);
    this.diasEnStock = this.calcularDiasEnStock();
} 
calcularDiasEnStock() {
    const fechaActual = new Date(); // Fecha actual
    const diferenciaTiempo = fechaActual - this.fechaEntrada; // Diferencia en milisegundos
    const diasEnStock = Math.floor(diferenciaTiempo / (1000 * 3600 * 24)); // Convertir de milisegundos a días
    return diasEnStock;

}}

const productos = [];
productos.push (new Producto ("MOCHILA BALDER",129990,"Mochila",12,'2024-07-23'));
productos.push (new Producto ("MOCHILA FENRIR",134990,"Mochila",10 ,'2024-07-15'));
productos.push (new Producto ("MOCHILA FREYJA",129990,"Mochila",10,'2024-07-15'));
console.log(productos);
console.log(`Cantidad de productos: ${productos.length}`);



//     { nombre: "MOCHILA FREYJA", precio: 129990, categoria: "Mochila", stock: 10, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "CARTERA FRIGG", precio: 34990, categoria: "Carteras", stock: 9, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "BOLSO HEL", precio: 99990, categoria: "Bolsos", stock: 14, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "BOLSO TYR", precio: 159990, categoria: "Accesorios", stock: 10, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "BILLETERA BRAGI", precio: 24990, categoria: "Accesorios", stock: 20, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "BILLETERA BRIMIR", precio: 27990, categoria: "Accesorios", stock: 16, fechaEntrada: new Date('2024-07-23') },
//     { nombre: "PAD ESCRITORIO", precio: 19990, categoria: "Pads", stock: 26, fechaEntrada: new Date('2024-07-23') }