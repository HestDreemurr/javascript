const socket = new WebSocket("ws://localhost:8080")

// Quando a conexão for aberta
socket.onopen = (event) => {
  console.log("Conexão estabelecida.")
  socket.send("Olá, servidor!") // Envia uma mensagem ao servidor
}

// Quando a mensagem do servidor for recebida
socket.onmessage = (event) => {
  console.log(`Mensagem recebida do servidor: ${event.data}`)
}

// Quando a conexão for fechada
socket.onclose = (event) => {
  console.log("Conexão fechada", event)
}

// Quando der erro no WebSocket
socket.onerror = (error) => {
  console.log(`Erro no WebSocket: ${error}`)
}