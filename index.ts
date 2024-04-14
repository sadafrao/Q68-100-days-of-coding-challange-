// Q68
// this function multiples two decimal num
function multiplydecimals(num1 : number , num2 : number): number{
// multiply num and round result two decimal
return Math.round((num1 * num2) * 100) / 100;

}
console.log(multiplydecimals(0.1 , 0.2));