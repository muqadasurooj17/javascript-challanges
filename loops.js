//loops

for(var i=1; i<=10; i++)
  console.log("the value of loop is " + i)


function oddlop(){
  for(i=3; i<30; i++){
    2(i+1);
  }
console.log("the valye of odd numbers loop is" + oddlop())
    }

    
//switch statement
let age=prompt("whats your age")
switch(age){
  case 12:
    console.log("your age is 12")
    break;
    case 13:
    console.log("your age is 13")
    break;
    case 14:
    console.log("your age is 14")
    break;
  default:console.log(
    "your age is not speacil ")
}

//while loop in js
var a;

while ( a<=10){
console.log(prompt("enter the value of a "+ a))
}

//working of for of loop
for( let b  of "muqadas")
  console.log(b);

  let obj={
    urooj:17,
    car:"bmw",
    dress:"red",
    age:23
  
  }
  for(let a in obj)
    console.log("details of "+ a +"are here"+obj[a] );