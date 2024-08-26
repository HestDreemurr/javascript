class Carta {
  constructor(id, valor) {
    this.id = id
    this.valor = valor
    this.virada = false
  }
  
  virar() {
    this.virada = !this.virada
  }
  
  combinaCom(outraCarta) {
    return this.valor == outraCarta.valor
  }
}

class JogoDaMemoria {
  constructor(cartas) {
    this.cartas = cartas
    this.cartasViradas = []
  }
  
  iniciar() {
    this.embaralhar()
    this.renderizarCartas()
  }
  
  embaralhar() {
    this.cartas.sort(() => Math.random() - 0.5)
  }
  
  renderizarCartas() {
    let cartasContainer = document.querySelector("div#cartas-container")
    
    this.cartas.forEach(carta => {
      let cartaElemento = document.createElement("div")
      cartaElemento.classList.add("carta")
      cartaElemento.innerHTML = `<div class="frente">${carta.valor}</div> <div
      class="verso"></div>`
      cartaElemento.addEventListener("click", () => this.virarCarta(carta,
      cartaElemento))
      
      cartasContainer.appendChild(cartaElemento)
    })
  }
  
  virarCarta(carta, elemento) {
    if (!carta.virada) {
      carta.virar()
      elemento.classList.add("virada")
      this.cartasViradas.push(carta)
      if (this.cartasViradas.length == 2) {
        this.verificarPar()
      }
    }
  }
  
  verificarPar() {
    let [carta1, carta2] = this.cartasViradas
    if (carta1.combinaCom(carta2)) {
      this.cartasViradas = []
    } else {
      setTimeout(() => {
        carta1.virar()
        carta2.virar()
        document.querySelectorAll("div.carta").forEach(elemento =>
        elemento.classList.remove("virada"))
        this.cartasViradas = []
      }, 500)
    }
  }
}

let cartas = [
  new Carta(1, "A"), new Carta(2, "A"),
  new Carta(3, "B"), new Carta(4, "B"),
  new Carta(5, "C"), new Carta(6, "C"),
  new Carta(7, "D"), new Carta(8, "D"),
]

let jogo = new JogoDaMemoria(cartas)
jogo.iniciar()