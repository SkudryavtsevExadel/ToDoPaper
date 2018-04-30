/*
Task:
Find roots of quadratic equation with the given coefficients a, b, c. Log on console roots or some message, if
there are no roots.

Vealues for D > 0
a=1
b=-8
c=12
Values for D = 0
a=1
b=-6
c=9
Values for D < 0
a=5
b=3
c=7
*/

var a=1;
var b=-8;
var c=12;
var D=b*b-4*a*c;
if(D > 0){
    var x1=(-b + Math.sqrt(D))/(2*a);    
    var x2=(-b - Math.sqrt(D))/(2*a);
    alert ('First root '+ x1 + '; ' + 'Seond root '+ x2);
}
else{
    if (D < 0){
        alert ('No roots');
    }
    else{
        var x= -(b/(2*a));
        alert ('Root '+ x);
    }
}