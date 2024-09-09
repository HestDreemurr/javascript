const WebSocket = require("ws")
const ws = new WebSocket.Server({
  port: 8080
})

// Quando a conexão for estabelecida
ws.on("connection", ws => {
  console.log("WebSocket conectado.")
  
  // Quando a mensagem do cliente for recebida
  ws.on("message", message => {
    console.log(`Mensagem recebida: ${message}`)
    ws.send(`Voce disse: ${message}`) // Envia uma mensagem ao cliente
  })
  
  // Quando a conexão for fechada
  ws.on("close", () => {
    console.log("WebSocket desconectado.")
  })
})