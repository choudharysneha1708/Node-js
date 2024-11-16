let score = "33";
let s1 = null; // after converting it to number it gives 0
let s2 = undefined; //after converting to number it gives NaN
let s3 = true; // after conterviting it to number it gives 1
let s4 = "sneha"; //after  converting it to number it gives NaN
let newScore = "33abc";
console.log(typeof newScore);
let valueInNumber = Number(score);

/**
 * dataType of NaN is number
 * "33"=>33
 * true=>1; false => 0
 */
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/**Operation */
let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2 + 3);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3); //2 to the power 3
console.log(2 / 2);
let str1 = "Hello";
let str2 = " Sneha";
let str3 = str1 + str2;
console.log(str3);
// in js if there is a number and string and we have to peroform some operation
/**
 * then phle jo hoga usme convert hoga agar string h toh sare
 * ko string ke tarh hi treate kre ge and agr phle numbers
 * hai toh uska operation perform ho jae ga
 * pir result pir string me convert hoga
 */
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true); // 1
console.log(+""); //0 by writing + it will convert into number
