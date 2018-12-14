var houseType = "Victorian";
var address = "1234 Valley Street";
var houseColor = "Yellow";
var bedrooms = 4;
var bathrooms = 2.5;
var sqft = 4000;
var garage = true;
var commissionPercent = .06;
var price = 375000 ;
var commission = price * commissionPercent;

console.log("The lovely", houseColor, houseType, "Located at", address);
console.log("Your total commission is", commission.toLocaleString('en-US', {style: 'currency', currency:"USD"}));
console.log("cost", price.toLocaleString('en-US',{style: 'currency', currency:"USD"}));