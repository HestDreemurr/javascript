function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('foto')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são <strong>${hora}</strong> horas!`
  if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'noite.png'
    document.body.style.background = '#515154'
  }
}