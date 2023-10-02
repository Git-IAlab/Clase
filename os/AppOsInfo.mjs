import { platform, release, totalmem, freemem, cpus, arch, hostname, networkInterfaces, uptime } from 'node:os';

console.log("inforcion del sistema operativo " + platform());
console.log("version del sistema operativo " + release());
console.log("memoria total " + totalmem() / 1024 / 1024);
console.log("memoria libre " + freemem() / 1024);
console.log("Cpus del sistema operativo " + cpus().length);
console.log("Arquitectura OS " + arch())
console.log("Hostmane " + hostname())
console.log("Interfaces de conexion  " + networkInterfaces())
console.log("Tiempo de encendido " + uptime() / 60 / 60)