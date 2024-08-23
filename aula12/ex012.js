var agora = new Date()
var dia = agora.getDay()

console.log(dia)

switch (dia) {
  case 0:
    console.log("Hoje é Domingo!")
    break
  case 1:
    console.log("Hoje é Sábado!")
    break
  case 2:
    console.log("Hoje é Segunda!")
    break
  case 3:
    console.log("Hoje é Terça!")
    break
  case 4:
    console.log("Hoje é Quarta!")
    break
  case 5:
    console.log("Hoje é Quinta!")
    break
  case 6:
    console.log("Hoje é Sexta!")
    break
  default:
    console.log("ERRO! Dia inválido!")
    break
}