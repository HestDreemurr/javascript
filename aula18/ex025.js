class Gato {
  constructor(nome) {
    this.nome = nome
  }
  
  falar() {
    console.log(`${this.nome} fez um barulho.`)
  }
}

class Leao extends Gato {
  falar() {
    super.falar()
    console.log(`${this.nome} rugiu.`)
  }
}

let leao = new Leao("Mel")
leao.falar()