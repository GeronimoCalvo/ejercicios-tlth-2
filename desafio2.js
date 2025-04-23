let nombreProducto = prompt ("Ingrese el nombre del producto")
let precioUnitario = prompt ("Ingrese el precio del producto")
let cantDeseada = prompt ("Ingrese la cantidad de unidades a comprar")

let precioFinal = precioUnitario * cantDeseada 
alert (`Vas a comprar ${cantDeseada} ${nombreProducto}s con un precio total de ${precioFinal}`)