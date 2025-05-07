const sumarProductos = (precioUnitario , cantidadDeseada) => precioUnitario * cantidadDeseada


let inputPrecio = prompt ("ingrese precio")
let inputCantidad = prompt ("ingrese cantidad")
console.log(sumarProductos(inputPrecio, inputCantidad))