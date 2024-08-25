class Animal {
  constructor(nome) {
    this.nome = nome
  }
  
  falar() {
    console.log(`${this.nome} emite um barulho.`)
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(`${this.nome} late.`)
  }
}

let cachorro = new Cachorro("Mel")
cachorro.falar()