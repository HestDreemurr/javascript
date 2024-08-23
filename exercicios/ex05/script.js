// Usando a função MAP em um array onde os elementos são objetos
let paragrafos = document.querySelectorAll("p")

console.log(paragrafos)

let valores = [].map.call(paragrafos, p => p.innerText)

console.log(valores)