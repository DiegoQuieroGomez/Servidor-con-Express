const fs = require('fs')

class Contenedor{
    constructor(nombre){
        this.nombre = nombre
    }
    //metodo para crear el archivo// usar solo para simular un documento con articulos
    async create(object){
        await fs.promises.writeFile(this.nombre, JSON.stringify(object, null, 2))
        .then(console.log('Archivo creado exitosamente'))
        .catch(error => console.log(error))
    }

    async save(object){

        let productos = []
        let ultimo 
        let countId = 1
        const data = await fs.promises.readFile(this.nombre, 'utf-8')
        .then(console.log(`Archivo leido correctamente`))
        .catch(error => console.log(error))
        let mix = JSON.parse(data)
        if (mix.length > 0) {
            productos.push(...mix)
        }else{
            productos.push(mix)
        }
        productos.push(object)
        productos.forEach(producto => {
            producto.id = countId++
        });
        fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, 2))
        .then('sobreescritura correcta')
        .then( ultimo = productos.at(-1))
        .then(console.log(ultimo.id))
        .catch(error => console.log(error)) 
    }

    async getById(numero) {
            
        let productos = []
        let productoSeleccionado 
        const data = await fs.promises.readFile(this.nombre, 'utf-8')
        .then(console.log("lectura correcta"))
        .catch(error => console.log(error))
        let mix = JSON.parse(data)
        productos.push(...mix)
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id = numero) {
                productoSeleccionado = productos[i]
            }
            
        }
        
        console.log(productoSeleccionado)
    }

    async getAll(){

        let productos = []
        
        const data = await fs.promises.readFile(this.nombre, 'utf-8')
        .then(console.log("lectura correcta"))
        .catch(error => console.log(error))
        let mix = JSON.parse(data)
        productos.push(...mix)

        console.log(productos)

    }

    
    async deleteById(numero){

        let productos = []
        let productosFinal = []

        const data = await fs.promises.readFile(this.nombre, 'utf-8')
        .then(console.log("lectura correcta"))
        .catch(error => console.log(error))
        let mix = JSON.parse(data)
        productos.push(...mix)
        console.log(productos)
        productosFinal = productos.filter(producto => producto.id != numero)
        console.log(productosFinal)

        fs.promises.writeFile(this.nombre, JSON.stringify(productosFinal, null, 2))
        .then(console.log(`producto id: ${numero} eliminado`))
        .catch(error => console.log(error))
    }

    async deleteAll(){
        let productos = []
        
        fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, 2))
        .then(console.log('Ya no tenemos productos!'))
        .catch(error => console.log(error))

    }

    
}

const contenedor1 = new Contenedor('Productos.txt')
//Ejecutar primero create y metodo save teclado 2
//contenedor1.create({tittle:'teclado', price: 2000, thumbnail: 'https://www.productosteclado.com'})
//contenedor1.save({tittle:'teclado2', price: 8000, thumbnail: 'https://www.productoteclado2.com'})

//Segunda ejecución: Añade un tercer producto
//contenedor1.save({tittle:'mouse', price: 50000, thumbnail: 'https://www.productomouseinala.com'})

//Ejecucion con id Existente: trae el objeto por ID
//contenedor1.getById(3)

//Ejecucion getAll: Devuelve un array con todos los objetos del documento
//contenedor1.getAll()

//Ejecución DeleteById: elimina el objeto del documento
//contenedor1.deleteById(2)

//Ejecucion DeleteAll
//contenedor1.deleteAll()

