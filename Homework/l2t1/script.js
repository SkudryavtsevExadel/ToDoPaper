/*
Task:
The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. Log on console both arrays.
*/

var arrA = [- 1, 2, -15, 7, 10, 3, 20 ];
var arrB = arrA.filter(function(number){
    return number>0;
})
console.log('Positive array: ' + arrB);
var arrC = arrA.filter(function(number){
    return number<0;
})
console.log('Negative array: ' + arrC);