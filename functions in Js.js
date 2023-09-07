console.log("printing of sums with n numbers")
let sum=0;
let n=prompt("enter the value of n")
n=Number.parseInt(n)
for(let i=1; i<=n; i++){
  sum+=(i+1)
}
console.log("the value of n is "+ n +" and the value of sum is "+ sum);

working in loop in objects

 var a;
 var b;

function myadd(a, b){
return  a+b;
}

console.log(myadd(3,2));

//converting minutes to seconds
var mint;
function minttosec(mint){
  return mint*60
}
console.log(minttosec(4));


//agesinto days
let age=prompt("enter the value of age")
  age=Number.parseInt(age)
function myAge(age){

  return age*365
}

console.log("the age of" +age +" years human according to days is " + myAge(age));


