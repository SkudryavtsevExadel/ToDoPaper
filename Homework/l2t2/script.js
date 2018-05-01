/*
Task:
The numeric array is given. You should find amount of reps for each element in the array and log it on
console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] you should log:
1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)
*/

var arrA = [ 1, 2, 1, 2, 3.14, 4, 2, 1];
var result = [];
arrA.forEach(function(a){
    result[a] = result[a] + 1 || 1;
});
for (var key in result)
   console.log('Number "' + key + '" is repeated ' + result[key] + ' times');