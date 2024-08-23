let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isValido(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isValido(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
    num.focus()
  } else if (num.value.length == 0) {
    window.alert('ERRO! Por favor, digite um número')
  } else {
    window.alert('ERRO! Número inválido ou já encontrado na lista.')
  }
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('ERRO! Nenhum número adicionado a lista ')
  } else {
    let total = valores.length
    res.innerHTML += `<p>Ao todo, <strong>${total}</strong> números foram adicionados.`
    let maior = valores[0]
    let menor = valores[0]
    soma = 0
    for (let pos in valores) {
      if (valores[pos] > maior) {
        maior = valores[pos]
      }
      if (valores[pos] < menor) {
        menor = valores[pos]
      }
      soma += valores[pos]
    }
    res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.`
    res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.`
    res.innerHTML += `<p>A soma dos valores informados é <strong>${soma}</strong>.`
    res.innerHTML += `<p>A média dos valores informados é <strong>${soma / total}</strong>.`
  }
}