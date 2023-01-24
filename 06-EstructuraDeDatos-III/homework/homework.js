'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null
}

BinarySearchTree.prototype.size = function(){
   let count = 1;
   if(this.left){
      count++
      this.left.size ()
   } if (this.right){
      count ++;
      this.right.size()
   }  
   return count
}

BinarySearchTree.prototype.insert = function(value){
//   const newTree = new BinarySearchTree(value);

  if(value < this.value){ //el valor pasado es menor que mi raiz??
    if(this.left){ // si hay algo a la izq... recursion, vuelvo a preguntar, para luego insertar
       this.left.insert(value)
      }else{                  //si no hay nada a la izq inserto mi nuevo nodo
         this.left = new BinarySearchTree(value);
         return value
      } 
   } 
   else if(value > this.value){
      if(this.right){
         this.right.insert(value)
      }
      else{
         this.right = new BinarySearchTree(value);
         return value
      }
   }
}

BinarySearchTree.prototype.contains = function(value){
   if(value === this.value)return true;

   if(value > this.value && this.right){
      return this.right.contains(value)
   }
   else if(value < this.value && this.left){
      return this.left.contains(value)
   }
   return false
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, value){
   if(value === 'post-order'){  //recorrido del arbol es: de abajo hacia arriba, de izq-der-nodo
      if(this.left) this.left.depthFirstForEach(cb, value);
      if (this.right) this.right.depthFirstForEach(cb, value);
      cb(this.value);  
      return 
   }
   if(value === 'pre-order'){ //recorrido: arriba hacia abajo, nodo-izq-der
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, value);
      if (this.right)  this.right.depthFirstForEach(cb, value);
      return
   } 
   if(value === 'in-order' || !value){ //recorrido: izq-nodo-der
      if(this.left) this.left.depthFirstForEach(cb, value);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, value);
      return
   }

}

//recorrido de arriba hacia abajo, izq-der. baja por niveles
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue){
   if(!queue){       //sino hay una fila, creame una
      var queue = []
   }
   cb(this.value); // se ejecuta el cb

   if(this.left) queue.push(this.left);   //si hay algo a la izq, guardalo en la fila
   if(this.right) queue.push(this.right);

   if(queue.length > 0)    //mientras la fila tenga algo, se va a quitar y ejecutar
   queue.shift().breadthFirstForEach(cb, queue) //se pasa por parametro el queue a fin de evitar que se reinicie, sino que conserve los valores a ejecutar
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
