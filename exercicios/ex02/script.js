function contar() {
  inicio = document.querySelector('input#inicio')
  fim = document.querySelector("input#fim")
  passo = document.querySelector("input#passo")
  res = document.querySelector("div#res")
  var c = Number(inicio.value)
  var f = Number(fim.value)
  var p = Number(passo.value)
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert("ERRO! Preencha todos os campos!")
  } else {
    if (p <= 0) {
      alert("Passo inválido! Será considerado passo 1.")
      p = 1
    }
    if (c > f) {
      c = c - c * 2
      f = f - f * 2
    }
    res.innerHTML = ""
    res.innerHTML = "<br>Contando... <br>"
    for (var i = c; i <= f; i += p) {
      if (i >= f) {
        res.innerHTML += `<strong>${String(i).replace("-", "")} </strong> \u{1F3C1}`
      } else {
        res.innerHTML += `<strong>${String(i).replace("-", "")}</strong> \u{1F449} `
      }
    }
  }
}