// Comentario en una línea

/*
    Un 
    comentario
    en 
    bloque
*/

let titulo = "Practica de JavaScript"; // String
let edad = 20; // Number
let soltero = true; // Boolean (true/false)
let nombre = null; // Null
let apellido; // Undefined

console.log( "El titulo es: " , titulo );
console.log( "Edad: ", edad );
console.log( "Soltero: ", soltero );
console.log( "Nombre: ", nombre );
console.log( "Apellido: ", apellido );

let resultado = 4 + 5 * 7 - 2 / 3;
console.log( "Resultado: ", resultado );

nombre = "Alex";
apellido = "Rodriguez";

let nombreCompleto = nombre + " " + apellido;
console.log( nombreCompleto );


let x = 10;
let y = 20;
let z = 30;
let suma = x + y;

//suma = suma + z;
suma += z;
/*
/= *= %= -=
++ --
*/
console.log( suma );
suma ++; // suma = suma + 1;  suma += 1;
console.log( suma );