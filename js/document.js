 /* alert('hola js') */

let nombre = 'wilmer ' //podemos reasignarla
/* const apellidos = 'ramirezsas'
 */
/* apellido = 'ruiz'
 */

//tipos de datos
//null = le asignamos que existe la variable pero que no tiene valor
//undefined = que una variable no tiene un valor y esta inicializada
//string = cadena de texto
//numericos = es un numero
//objetos = {} se guarda propiedad y valor, para tener mas orden
//arreglos = [] se guarda mucha informacion, pero no conocemos los valores

/* const resultado = nombre + apellido */

/* let numero= 'carlos'
numero=7
console.log(numero) */


//ternario
const prueba = 10 >= 10 ? 'es verdadero' : ''

const apellido2 = "ramirez 'luis' "
console.log(apellido2)

/* const usuarioConectado = true */
const mayor = 10 > 20

//guardamos informacion en arreglos, en los arreglos no sabemos los valores a diferencia de un objeto
const arreglos = [1,5,5, {propiedad:true}, 'carla', [21]]

//objetos clave y valor, propiedad y valor  
const objetos = {
    nombre: 'wilmer',
    edad: 22,
    carro: {
        marca: 'ford',
        color: 'negro'
    }
}

//las funciones son bloque de codigo que podemos reutilizar
function hola(){
    console.log('hola wilmer');
}

hola()
//_______________________________________________________________________________________

//con los numero podemos hacer cualquier operacion, y sumarle lo que queramos +=, -=, *=, /=, %=
const numeros = 10 + 20
const numeros1 = 10 % 3
let numero2 = 10
numero2-=5
console.log(numero2);

//operadores comparacion
// no es tan exigente ==, compara tanto valor y tipo ===, <, >, !=, <=, >=, ternario ?,

const cantidad = 10 === '10'
const diferente = 52 != 52
const ternario = 7 > 10 ? 'el primer valor es mayor' : 'el segundo es menor'

let valor1 = 10
let valor2 = 30

const resultado1 = valor1 + valor2 

const gramo = true

/* if(resultado1 > 45){
    console.log( 'el valor es aceptado');
}else{
    console.log('el valor no fue aceptado');
} */
/* console.log(resultado1); */ 


let prueba1 = gramo == true ? 'puedes venderlo' : 'No se puede vender'
