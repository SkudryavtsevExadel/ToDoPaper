/*
Task:
Find the following sum: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n for a given n. Log the result on console.
*/

var n=15;
var S=1;
for(i=2; i<=n; i++){
    S=S+(1/i);
}
console.log(S);