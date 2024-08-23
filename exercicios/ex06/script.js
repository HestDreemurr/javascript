import * as Modulo from "./modulos/modulo.js"

document.querySelector("#criar").addEventListener("click", () => {
  let elemento = Modulo.criarDiv(document)
  Modulo.criarP(elemento)
})