# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // el hoisting no lo sube, en el hilo de ejecucion va a quedar como ultima
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10); // modifica a la linea 13 a la funcion C
console.log(b); // 10 se obtiene de forma global
console.log(x); //  1 se obtiene de lo global
```

```javascript
console.log(bar); //undefine
console.log(baz); // error! porque el var no existe
foo(); // Hola! Porque el hoisting sube la fx completa
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);// 'Franco'
```

```javascript
var instructor = 'Tony';
console.log(instructor); // 'Tony'
(function () {
   if (true) {
      var instructor = 'Franco';// VAR se puede volver a declarar
      console.log(instructor); // 'Franco'
   }
})();
console.log(instructor);// 'Tony'
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) { //los controles de flujo solo tiene un contexto en bloque NO CREAN UN NUEVO CONTEXTO, POR ENDE LOS VAR PISAN AL VAR ANTERIOR
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);// 'The Flash'
   console.log(pm); // 'Reverse Flash' porque tiene scope en bloque
}
console.log(instructor); //'The Flash' con el var se sobreescribe
console.log(pm);// 'Franco' 
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px" la suma sirve para concatenar y por asociativa empieza de izq a der
"$" + 4 + 5 // "$45"
"4" - 2 // 2 la resta sirve como operacion
"4px" - 2 // NaN no se rompe, porque es un no num (4px)
7 / 0  // infiniti porque ningun num se puede dividir por cero. Infinity es un no num
{}[0] //undefine js {} no lo toma como obj sino como bloque de codigo
parseInt("09") // 9
5 && 2 // 2 ambos tienen que ser true y devuelve el ultimo que encontro
2 && 5 // 5
5 || 0 // 5 solo necesita un valor en true, entonces ya no valora el segundo
0 || 5 // 5 el cero para js es false entonces evalua el 5 que es true
[3]+[3]-[10] // 23 porque primero concatena la suma y luego hace la resta como operacion
3>2>1 // false porque true no es mayor a uno
[] == ![] // true porque compara valores, no tipo de datos. ![] = para js primero es falsy(no estrictamente falso) luego false = 0 y [] = "" => el string vacio da cero, por eso false = false da TRUE
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefine
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); //undefine. porque en la ejecucion en ese contexto el hoisting sube el var pero sin su valor. al estar en false no entra en el if
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa' porque el this esta dentro del metodo y apunta al obj

var test = obj.prop.getFullname;// se guarda la funcion tal cual sin ejecutarla, es lo mismo que hacer esto => function () {return this.fullname}
         
console.log(test());// 'undefine' porque es global dentro del vs si estuviera en el navegador si entra 'juan perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // 1, 4, 3, 2 los sicronicos se resuelven primero, despes en la cola de ejecucion de lo asincronico sale, el que entra primero a la fila.
```
