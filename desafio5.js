let productos = ["heladera", "microondas", "tostadora", "lavarropas"]
for (let producto in productos)
    console.log (productos[producto])

productos.push("celulares")
console.log(productos) 

productos.shift()
console.log(productos)
