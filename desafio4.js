const sumarProductos = (precioUnitario , cantidadDeseada) => `precio final : $${precioUnitario * cantidadDeseada}`
console.log(sumarProductos (23000, 5))

let inputPrecio = prompt ("ingrese precio")
let inputCantidad = prompt ("ingrese cantidad")
console.log(sumarProductos(inputPrecio, inputCantidad))