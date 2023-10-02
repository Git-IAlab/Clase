const { readFile } = require('node:fs/promises'); // module nativo de node.js

(async () => {
    try {
        const file1 = await readFile('../data.txt', 'utf-8')

        console.log("Primer texto : " + file1)

        console.log()
        console.log("procesos que se ejecutan despues de leer el archivo y esperar a leer el 2 archivo");
        console.log()

        const file2 = await readFile('../data2.txt', 'utf-8')
        console.log("Segundo texto :  " + file2)
    } catch (error) {
        console.error(error)
    }
})();