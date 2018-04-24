/*
simple number 107
composit number 256
*/
var n=107;
if ((n%2===0)&&(n!=2)){
    console.log(n + ' is the composit number.');// any even number is a composite
} 
else if (n===2)//number 2 is simple
     console.log(n + ' is the simple number.');
else{ // odd number
     var k=Math.round(Math.sqrt(n));
     var flag = false;
             
     for(i=2; i<k+1; i++)
        if(n%i===0){
          console.log(n + ' is the composit number.');
          flag = true;
          break;
         }
            
     if (flag === false)
       console.log(n + ' is the simple number.');
}