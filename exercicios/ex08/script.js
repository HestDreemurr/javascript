document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault()
  
  let cidade = document.querySelector("input#cidade").value
  let resultado = document.querySelector("div#resultado")
  resultado.innerHTML = "<p>Carregando...</p>"
  
  try {
    let clima = await buscarClima(cidade)
    resultado.innerHTML = `<p>A temperatura em <strong>${cidade}</strong> é de
    <strong>${clima.main.temp}°C</strong> com
    <strong>${clima.weather[0].description}</strong>.</p>`
  } catch (erro) {
    resultado.innerHTML = "<p class='erro'>Erro ao buscar o clima. Tente novamente.</p>"
  }
})


async function buscarClima(cidade) {
  let appId = "ae7f214f05c0db3fffee1d01099044ac"
  let resposta = await
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${appId}&units=metric&lang=pt_br`)
  return await resposta.json()
}