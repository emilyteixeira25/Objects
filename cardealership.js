var carModel = "honda";
var year = "2018";
var totalCostofCar = 22000;
var MoneyDown = 2500;
var CarTax = .06;
var YearLoanPayment = 24;
var insurance = 160;
var oneYearLoanPayment = 12;

var carCost = totalCostofCar - MoneyDown; //19500
var taxPerYear = carCost * CarTax; // 1170
var finalAmount = carCost + taxPerYear; // 20670
var insuranceTwoYears = insurance * YearLoanPayment; //3840
var carPaymentTwoYears = finalAmount / YearLoanPayment; 
var carPaymentOneYear = carPaymentTwoYears / oneYearLoanPayment;

console.log("Your two year car payment is", carPaymentTwoYears, "and your insurance for two years is", insuranceTwoYears);
console.log("Your one year car payment is", carPaymentOneYear);


