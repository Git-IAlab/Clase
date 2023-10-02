const { readFile } = require('node:fs/promises'); // module nativo de node.js

Promise.all([
    readFile('../data.txt', 'utf-8'),
    readFile('../data2.txt', 'utf-8')
]).then(([data, data2]) => {
    console.log("primer archivo leido",data)
    console.log("segundo archivo leido",data2)
})

