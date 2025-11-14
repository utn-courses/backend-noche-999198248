import os from "node:os"

console.log("=== Informacióm de nuestro sistema operativo ===")

console.log("Sistema operativo:", os.type())
console.log("Versión del sistema:", os.release())
console.log("Arquitectura del sitema:", os.arch())
console.log("Usuario actual:", os.userInfo().username)
console.log("Memoria RAM (GB):", (os.totalmem() / 1024 ** 3).toFixed(2))
console.log("Memoria RAM (GB):", (os.freemem() / 1024 ** 3).toFixed(2))
console.log("Tiempo encendida (min):", Math.floor(os.uptime() / 60))

console.log("=== Informacióm de nuestro sistema operativo ===") 