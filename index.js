// first we initialize the variable 

let x = 1234;
let y = "Yasitha";
let z = 1.32;

// in the console typeof keyword using for get the type of variable.

console.log(x,typeof x); //     1234 'number'
console.log(y,typeof y); //     Yasitha string
console.log(z,typeof z); //     1.32 'number'

// convert  the variable type using this command.

x = String(x); // convert the variable integer to string type
y = Boolean(y); // convert the variable string to boolean type
z = String(z); // convert the variable integer to string type


console.log(x,typeof x); //     1234 string
console.log(y,typeof y); //     true boolean
console.log(z,typeof z); //     1.32 string