function gerar() {
  txtn = document.querySelector("input#txtn")
  tab = document.querySelector("select#seltab")
  n = Number(txtn.value)
  if (txtn.value.length == 0) {
    alert("ERRO! O campo acima precisa ser preenchido.")
  } else {
    tab.innerHTML = ""
     for (var c = 1; c <= 10; c++) {
       var item = document.createElement("option")
       item.text = `${n} × ${c} = ${n * c}`
       tab.appendChild(item)
    }
  }
}