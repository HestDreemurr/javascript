class Retangulo {
  constructor(largura, altura) {
    this.largura = largura
    this.altura = altura
  }
  
  // Getter
  get area() {
    return this.calcularArea()
  }
  
  // Método
  calcularArea() {
    return this.largura * this.altura
  }
}

let retangulo = new Retangulo(10, 10)
console.log(retangulo.area)