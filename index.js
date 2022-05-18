const Contenedor = require('./contenedor_promesas')

const container = new Contenedor('file2.json')

container.save({
    autor:'prueba1',
    name:'prueba1',
    price:100
})

// container.save({
//     autor:'prueba2',
//     name:'prueba2',
//     price:200
// })

// console.log("Usando getByID")
// console.log(container.getByID(3))

// console.log("Usando getAll")
// console.log(container.getAll())

// console.log("Usando deleteByID")
// container.deleteByID(3)

// container.deleteAll()
