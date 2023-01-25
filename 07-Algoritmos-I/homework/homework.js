'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
//   let array = [];

//   let i = 2;
   
//   while(num > 1){
//     if(num % i === 0){
//       array.push(i)
//       num = num / i; 
//     } else i++
//   }
//   array.unshift(1);
//   return array
// }
   
let array = [1]; //incluimos porque todos los num son divisibles por 1
let divisor = 2;

while(num !== 1){
  if(num % divisor === 0){ // si me da 0 puedo hacer la division
    array.push(divisor); // agrego el 2 al divisor
    num = num / divisor // 180 / 2 = 90
  } else {
    divisor ++ //  cuando no se pueda dividir por 2 aumenta de a 1
  }; 
}
 return array
}
 


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  let cambiar = true;

  while(cambiar){
    cambiar = false;
    for(let i= 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        let auxiliar = array[i];
        array[i] = array[i + 1];
        array[i+1] = auxiliar;
        cambiar = true;
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

	for(let i = 1; i < array.length; i++){ // i comienza en la posicion 1 porque 0 la sumo como ordenada
    let x = i - 1; //x es quien compara los valores
    let aux = array[i];// guarda la posicion del num marcado
     
    while(x >= 0 && array[x] > aux){ // el ciclo para encontrar la posicion
      array[x + 1] = array[x];
      x--
    }
    array[x + 1] = aux //inserta el elemento
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for(let i = 0; i < array.length-1; i++){ //queda fijo hasta que termine de comparar y ordene
    let minimo = i // me guardo la posicion del minimo
    for(let x = i + 1 ; x < array.length; x++){ // va comparando a lo largo del array
      if(array[x] < array[minimo]){ // marca el minimo
        minimo = x
      }
    }
    //cambiamos las posiciones
    if(i !== minimo){
      let aux = array[i];
      array[i] = array[minimo];
      array[minimo] = aux
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
