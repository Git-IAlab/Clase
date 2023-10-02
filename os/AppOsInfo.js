const os = require('node:os');

console.log("inforcion del sistema operativo "+ os.platform());
console.log("version del sistema operativo "+ os.release());
console.log("memoria total "+ os.totalmem()/1024/1024);
console.log("memoria libre "+ os.freemem()/1024);
console.log("Cpus del sistema operativo "+ os.cpus().length);
console.log("Arquitectura OS " + os.arch())
console.log("Hostmane " + os.hostname())
console.log("Interfaces de conexion  " + os.networkInterfaces())
console.log("Tiempo de encendido " + os.uptime()/60/60)