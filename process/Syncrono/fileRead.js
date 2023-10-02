const fs = require('node:fs'); // module nativo de node.js

// --------------- modelos sincronos ----------------

console.log("Leyendo archivo de forma sincrona");
const text1 = fs.readFileSync('../data.txt', 'utf-8');
console.log(text1);

console.log("procesos que se ejecutan despues de leer el archivo");

const text2 = fs.readFileSync('../data2.txt');
console.log(text2.toString());