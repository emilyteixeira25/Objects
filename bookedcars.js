var bookedcars = [];
var cars = ["toyota", "honda", "lexus", "infiniti", "ford"];

bookedcars.unshift(cars.splice(0,1));

console.log(bookedcars);
console.log(cars);