// Echange de variables
// PARTIE A

let a = 5;
let b = 3;
let temp;

temp = a;
a = b;
b = temp;

console.log("a = " + a, "b = " + b);

// PARTIE B

let c = 0;
let d = 42;

c = c + d;
d = c - d;
console.log("c = " + c, "d = " + d);

// PARTIE C
let e = -1;
let f = -1;

[e, f] = [f, e];
console.log("e = " + e, "f = " + f);
