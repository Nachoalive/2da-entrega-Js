
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
    const fechaActual = new Date();
    const diferenciaTiempo = fechaActual - this.fechaEntrada; 
    const diasEnStock = Math.floor(diferenciaTiempo / (1000 * 3600 * 24)); 
    return diasEnStock;

}}

const productos = [];
productos.push (new Producto ("MOCHILA BALDER",129990,"Mochila",12,'2024-07-23'));
productos.push (new Producto ("MOCHILA FENRIR",134990,"Mochila",10 ,'2024-07-15'));
productos.push (new Producto ("CARTERA FRIGG",34990,"Cartera",9,'2024-07-15'));
productos.push (new Producto ("BOLSO HEL",99990,"Bolso",12,'2024-07-20'));
productos.push (new Producto ("BOLSO TYR",159990,"Bolso",14,'2024-07-23'));
productos.push (new Producto ("BILLETERA BRAGI",24990,"Accesorios",20,'2024-07-15'));
productos.push (new Producto ("BILLETERA BRIMIR",27990,"Accesorios",16,'2024-07-15'));
productos.push (new Producto ("PAD ESCRITORIO",19990,"Pads",26,'2024-07-20'));
console.log(productos);
console.log(`Cantidad de productos: ${productos.length}`);

