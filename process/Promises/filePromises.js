const fs = require('node:fs/promises'); // module nativo de node.js

fs.readFile('../data.txt', 'utf-8')
    .then(text => {
        console.log('Primer Texto ', text);
        console.log()
    })


console.log()
console.log("procesos que se ejecutan despues de leer el archivo y esperar a leer el 2 archivo");
console.log()

fs.readFile('../data2.txt')
    .then(text => {
        console.log('Segundo Texto ', text.toString());
        console.log()
    })