'use strict';

let result ={};
const first = +prompt("Укажите число");
const exponent = +prompt("Укажите степень");

function math(first, exponent=1) {
    if(isNaN(first) || isNaN(exponent)) {
        return alert('some error');
    } else {
        return alert(result = Math.pow(first, exponent));

    }
}
math(first, exponent)


