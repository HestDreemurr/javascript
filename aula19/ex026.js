fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(resposta => resposta.json())
  .then(data => console.log(data[0]))