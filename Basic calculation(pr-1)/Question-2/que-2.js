var a = parseInt(prompt("Enter A:- "));
var b = parseInt(prompt("Enter B:- "));

swap = a;
a = b;
b = swap;

document.write(`<h2>After Swapping: ${b} ${a}</h2>`);
document.write(`<h2>Before Swapping: ${a} ${b}</h2>`);
