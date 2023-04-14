//print the Fibonacci series
var n1 = 0,
n2 = 1,
sum = n1 + n2;
var num = prompt("Enter the number :");
for (var i = n1; i <= num; i++) {
sum = n1 + n2;
n1 = n2;
n2 = sum;
console.log(sum);
}

//find the factorial of a given  number

let fact = 1;
var num = prompt("Enter the number ");
for (var i = 1; i <= num; i++) {
fact = factorial * i;
}
console.log("Factorial of number is =" fact);

//Remove occurrences of characters
var str = prompt("Enter string ");
for (var i = 0; i <= str.length; i++) {
for (var j = 1; j < str.length; j++) {
  str[k]=str[i+j];
  if (str[i] == str[k]) {
    console.log(
      "string after deleting repeating  characters is: ",
      str.split(str[i]).join("")
    );
  }
}
}

//Reversing  a string.
var str = prompt("Enter string ");
var reverse = str.split("").reverse().join("");
console.log(reverse);

//Applying getter and setter method  using object.
const x = {number: "Unknown",
        size: 12,
};
console.log(x.number);
x.number = prompt(x.number + " set into ");
console.log(x.number);

//Print the  repeating characters from the string.
var str = prompt("Enter string ");
for (var i = 0; i < str.length; i++) {
for (var j = 1; j < str.length; j++) {
  if (str[i] == str[i + j]) {
    console.log(str[i]);
  }
}
}

//Check if the given number is integer or not?
var x = prompt("Enter a number ");
var y = Num(x);
var z = Num.isInteger(y);
if (z === true) {
console.log(y "is an integer");
} else {
console.log(y "is not an integer");
}