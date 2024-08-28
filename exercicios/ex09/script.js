let view = document.querySelector("#view")

document.querySelector("a#home").addEventListener("click", () => {
  view.innerHTML = "<h2>Página inicial</h2>"
})

document.querySelector("a#noticias").addEventListener("click", () => {
  view.innerHTML = "<h2>Notícias</h2>"
})

document.querySelector("a#contato").addEventListener("click", () => {
  view.innerHTML = "<h2>Contato</h2>"
})