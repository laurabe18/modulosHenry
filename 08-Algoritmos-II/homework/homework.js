'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // elegrir un pivot
  // variable izq  
  // variable der
  // hacer la ejecucion de corte o base
  //  recorrer el array
  // separarlo en mayores y menores de acuerdo al pivot
  //recursion
  // retornar
  
  if(array.length <= 1) return array;

  let pivot = array[0];
  let izq = [];
  let der = [];

  for(let i = 1; i < array.length; i++){
    if(array[i] <= pivot){
      izq.push(array[i])
    } else{
      der.push(array[i])
    }
  }
  return [...quickSort(izq),pivot,...quickSort(der)]
}
//   if (array.length <= 1) return array// si el array tiene menos de un valor no recurso
//   let pivot = array[0];//elijo el primer valor como pivote
//   let izq = [];
//   let der = [];
//   let ordenados = []

//   for (let i = 0; i < array.length; i++) {//leo el array
//     if (array[i] < pivot) izq.push(array[i]);//si el valor i del array es menor los guardo a la derecha
//     if (array[i] > pivot) der.push(array[i]);//si es mayo lo guardo a la derecha
//     if (pivot === array[i]) ordenados.push(array[i])//si es igual lo dejo ordenado
//   }
//   return quickSort(izq).concat(ordenados).concat(quickSort(der));//retorno la recursion de la izquierda conquetenada con los ordenados y la recursion de la derecha
// }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length <= 1) return array // si no hay nada en el array no se hace recusiva

  var mitad = Math.floor(array.length/2); // se divide el largo del array a la mitad
  var izq = array.slice(0, mitad);
  var der = array.slice(mitad);

  der = mergeSort(der); //recursiva del lado der
  izq = mergeSort(izq);// recusiva lado izq

  	var arr = []; // se crea un array para ir guardando

	while (izq.length && der.length) { // mientras el lado izq y der tenga para comparar
		if(izq[0] < der[0]) {  // compara arr izq y der, el valor mas chico lo guarda en el array
			arr.push(izq.shift());
		} else {
			arr.push(der.shift());
		}
	}
	return arr.concat(izq, der); // devuelve un solo array con sus 2 mitades ordenadas
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
