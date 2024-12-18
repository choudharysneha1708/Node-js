console.log(2>1);
console.log(2>=1);


/**
 * might be when we are compairing two value it might 
 * give not correct answer this is due to conversion into
 * same datatype so before compairing try to convert both into same data
 * type. Always compaire same dataType
 */

console.log(null >0);
console.log(null ==0);
console.log(null>=0);
/**
 * here the issue of conversion happen that's why it's 
 * giving in above true false and in last one true
 */

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined<0);
/**
 * here all gives false
 */


/**
 * === it's a strict check it will check data type also
 * 
 */
console.log("2"==2);//true
console.log("2"===2);//false because it will check data type also and find 
//it is not of same data type




