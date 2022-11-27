const express = require('express')
const app = express()
const fs = require('fs')

let info = []
let listado = []

try {
    const data = fs.readFileSync('Productos.txt', 'utf-8')
    console.log("archivo leido correctamente")
    info = data
    listado = JSON.parse(info)

} catch (error) {
    console.log(error)
}

const random = (array) => {
    let ran = Math.floor(Math.random()* 3)
    let objJson = JSON.stringify(array[ran])
    return objJson
    
}

random(listado)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchado en el puerto ${server.address().port}`)
})


app.get('/',(req, res) => {
    res.send(info)
    
})

app.get('/random', (req, res) =>{
    res.send(random(listado))
})