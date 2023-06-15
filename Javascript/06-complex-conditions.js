const car = {
  price: 2000,
  color: "red",
  numDoors: 3
}

if (car.price < 2000 || (car.color == "red" && car.numDoors == 4)) {
  console.log("Well take it")
} else {
  console.log("Welp, it's better to keep looking!")
}