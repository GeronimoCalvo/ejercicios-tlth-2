let NombreProducto = prompt ("Ingresa el nombre del producto")
let precioUnitario = prompt ("Ingrese el precio del producto")
let cantDeseada = prompt ("Ingrese la cantidad de unidades a comprar")

let precioFinal = precioUnitario * cantDeseada 

if(cantDeseada >=5){
    alert (`se aplica el 10% de descuento
         en vez de ${precioFinal}, vas a pagar ${precioFinal - (precioFinal *0.1)}`)
         
    
}
