function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*
Respuesta: Hello,Dojo no existe variable para crear diagrama t
*/

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*      
variable:    dato:
result       15
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*         
variable:       dato:
num          3,18
result
*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*    
variable:         dato:
num           15,10,10,15
result
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*

variable:  dato:
result     15,10,20,15
num
Respuesta: 15,10,20,15
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
variable:    datos:
y           3,5,16
result
Respuesta: num is 3, num is 5, result is 16
*/

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
/*
variables:      datos:
no hay var      5,8
Respuesta: 5,8
*/

 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
/*
variables:     datos:
no tiene var     2,5,3,8
Respuesta: 2,5,3,8
*/

 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
variable:       datos:
sum              5,8,13
result
Respuesta: sum is 5, sum is 8, result is 13 g
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
variables:     datos:
sum              5,3,6,3,5,8,19
result
Respuesta: sum is 5, sum is 3, sum is 6, sum is 3, sum is 5, sum is 8, result is 19
*/
