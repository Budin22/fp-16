'use strict';

let result ={};
const first = prompt("Укажите число");
const exponent = prompt("Укажите степень");

function math(a, b=1) {
    if(isNaN(+first) || isNaN(+exponent)) {
        return alert('some error');
    } else {
        return result = Math.pow(first, exponent);
    }
}
math()
alert(result);


