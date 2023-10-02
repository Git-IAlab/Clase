const fs = require('node:fs'); // module nativo de node.js

const dataas = fs.statSync('./data.txt')

console.log(
    dataas.isFile(),
    dataas.isDirectory(),
    dataas.isSymbolicLink(),
    dataas.size,
)
