'use strict';

let result ={};
const first = +prompt("Укажите число");
const exponent = +prompt("Укажите степень");

math(first, exponent);
function math(first, exponent=1) {
    if(isNaN(first) || isNaN(exponent) || first === 0) {
        return alert('some error');
    } else if(exponent === 0) {
        exponent = 1;
        return alert(result = Math.pow(first, exponent));
    }
    else {
        return alert(result = Math.pow(first, exponent));
    }
}
