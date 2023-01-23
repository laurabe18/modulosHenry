'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/


function LinkedList() { 
  this.head = null // la lista arranca vacia
}

function Node(value) { 
  this.value = value // el nodo va a tener un valor
  this.next = null  // su next va a estar en ppio vacio
}

LinkedList.prototype.add = function(value){ // agregamos nodos a la lista
  const newNode = new Node (value) // instanciamos un nuevo nodo con su valor
  let current = this.head // current va a ser quien recorra la lista, porvende va a ser el head

  // si la lista esta vacia, entonces el head va a ser el nuevo nodo
  if(!current) {
  this.head = newNode; 
  return value;
  }
  //si la lista no estaba vacia, la recorre hasta el final y agrega un nodo
  while(current.next) current = current.next; // donde current va hacer el proximo nodo
  
  current.next = newNode; // aca decimos que current es el nuevo nodo
  return value
}

LinkedList.prototype.remove = function(){
  let current = this.head;
  // si la lista solo tiene head
  if(!current) return null;
  //si la lista tiene slo el head, se guarda el valor y se elimina
  if(!current.next){
    const aux = this.head.value;
    this.head = null;
    return aux
  }
  // si no esta vacia y no tiene un solo nodo
  while(current.next.next){ // pregunta si tiene 2 nodos antes de pasarse
    current = current.next  // si tiene se pasa
  }
  const aux = current.next.value; // crea una variable donde guarda el valor del proximo nodo
    current.next = null; // lo elimina
    return aux  // retorna el valor
}

LinkedList.prototype.search = function(param){
  let current = this.head;
  // si hay nodos recorremos la lista
  while(current){
    if(typeof param === 'function'){ //buscamos si el parametro pasado es igual a una funcion
      if(param(current.value)){    //comparamos el parametro con el valor encontrado
      return current.value  // se retorna
      }
    }else {
      if(current.value === param) //si no se compara el parametro con el valor encontrado
      return current.value
    }
    current = current.next //por ultimo el nodo va a serv el siguiente
  } 
  return null  // si no se encuentra nada se retorna
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.bucket = []
}

HashTable.prototype.hash = function(string){
  let acumulador = 0;

  for(const char of string){
    const num = char.charCodeAt();
    acumulador += num
  }
  return acumulador % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw new TypeError('Keys must be strings'); // distinto a string usar throw (es como un return para errores)
  const index = this.hash(key); //aca nos da el indice

  if(!this.bucket[index]){ //si el casilleroesta vacio
    this.bucket[index] = {} // creamos un obj con la clave-valor
  }
  this.bucket[index][key] = value // si no esta vacia, agregamos al obj este nuevo clave-valor
}

HashTable.prototype.get = function(key){ //recibe por parametro
  const index = this.hash(key); // se busca si tiene dicha clave
  return this.bucket[index][key] // this.bucket(array), index(posicion del arr), key(propiedad)
}

HashTable.prototype.hasKey = function(key){
  const index = this.hash(key);
  return !!this.bucket[index][key] //poniendo !! se convierte en booleano
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
