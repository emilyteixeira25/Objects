var firstname="Emily";
var lastname="Teixeira";
var costofhome=350000;
var yearpayment=12000;
var taxes= 2500;

var totalyearly= yearpayment + taxes;
var yearstopay= Math.round (costofhome / totalyearly);

console.log("Hello", firstname , lastname);
console.log("It will take you", yearstopay, "years to pay off your home");
