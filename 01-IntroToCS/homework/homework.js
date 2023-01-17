'use strict';

function BinarioADecimal(num) {
   var decimal = 0;
   var numArr = num.split("").reverse();

   for(let i = 0; i < numArr.length; i++){
      decimal += numArr[i] * Math.pow(2, i)
   }
   return decimal
}

function DecimalABinario(num) {
   var binario = "";
   var number = num;

   do{
      binario = (number % 2) + binario;
      number = Math.floor(number /2)
   } while(number > 0);
   return binario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
