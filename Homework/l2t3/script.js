/*
Task:
Algorithms for tasks 1 and 2 implement as functions with one argument. Run both function with the same array in one script.js file.

*/
var arrA = [- 1, 2, -15, 2, -1, 3, 3, 3, -15, 1.2, 1.2, 5, 2];
var arrB = arrA.filter(function(number){
    return number>0;
})
console.log ('Task 1:');
console.log('Positive array: ' + arrB);
var arrC = arrA.filter(function(number){
    return number<0;
})
console.log('Negative array: ' + arrC);
console.log ('Task 2:')
var result = [];
arrA.forEach(function(a){
    result[a] = result[a] + 1 || 1;
});
for (var key in result)
   console.log('Number "' + key + '" is repeated ' + result[key] + ' times');