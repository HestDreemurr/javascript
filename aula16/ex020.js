function fatorial(num) {
  fat = 1
  for (let c = num; c > 1; c--) {
    fat *= c
  }
  return fat
}

console.log(fatorial(5))