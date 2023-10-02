const fs = require('node:fs'); // module nativo de node.js

fs.readFile('../data.txt', 'utf-8', (err, text) => {
    console.log('Primer Texto ',text);
    console.log()
}); // callback

console.log()
console.log("procesos que se ejecutan despues de leer el archivo y esperar a leer el 2 archivo");
console.log()

fs.readFile('../data2.txt', 'utf-8', (err, text) => {
    console.log('Segundo Texto ',text);
    console.log()
}); // callback
