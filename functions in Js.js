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


// Function to calculate the average of four digits
function calculateAverage() {
    // Prompt the user to enter four digits and store them in variables
    var num1 = parseFloat(prompt("Enter the first digit:"));
    var num2 = parseFloat(prompt("Enter the second digit:"));
    var num3 = parseFloat(prompt("Enter the third digit:"));
    var num4 = parseFloat(prompt("Enter the fourth digit:"));
  
    // Check if any of the inputs is not a valid number
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
      alert("Please enter valid numeric values for all four digits.");
      return;
    }
  
    // Calculate the average
    var average = (num1 + num2 + num3 + num4) / 4;
  
    // Display the result
    console.log("The average of the four digits is: " + average);
  }
  
  // Call the function to calculate the average
  calculateAverage();
  