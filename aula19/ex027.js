async function getProducts() {
  let resposta = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  let data = await resposta.json()
  return data
}

getProducts()
  .then(data => console.log(data[0]))