function sum(a, b) {
  return a + b
}
console.log(sum(10, 10))

function product(a, b) {
  return a * b
}
console.log(product(12, 12))

//conseguimos armazer o valor de uma funcão em uma váriavel.
const bigProduct = product(12434, 4355665)
console.log(bigProduct)

setTimeout(function () {
  console.log("Hey! You rock!!!")
}, 1000)

setTimeout(() =>
  console.log("Hey! You rock!!!"), 1000)