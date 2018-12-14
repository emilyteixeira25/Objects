var jacket = 60.89;
var pants = 29.99;
var shoes = 42.99;
var discount= 0.33;

var totaldiscount= Math.round(jacket + pants + shoes * discount);
var totalbill= Math.round(jacket + pants + shoes);

console.log("Your total discount is", totaldiscount);
console.log("And your total bill is", totalbill - totaldiscount);