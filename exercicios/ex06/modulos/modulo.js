function criarP(elemento) {
  elemento.innerHTML = "<p>Esse é um paragrafo criado com um modulo!</p>"
}

function criarDiv(document) {
  let div = document.createElement("div")
  document.body.appendChild(div)
  
  return div
}

export { criarP, criarDiv }