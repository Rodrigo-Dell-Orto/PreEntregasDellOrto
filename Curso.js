/*
! Variables 

let profesor = "Rodrigo" //La variable let Si se puede modificar
let edad = 19

!Para modificar un let
profesor = "Rodri"
edad = 20
const nombre = "Pedro" //La variable const NO se puede modificar
!Para se cambiada hay que cambiar de const a let la variable
?Siempre crear la variables en const

!Para definir una variable de 2 palabras se escribe todo junto y con mayuscula la primera letra
const nombreDeCurso = "JavaScript" //Si la variable esta entre "" es string (cadena de texto)
const anioDeNaciomiento = 2005 // Si es un numero se escribe solo y es in integer



! Operaciones con variables integer (numero)

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
const numero4 = 40;

const resultadoSuma = numero1 + numero2; //Suma
const resultadoResta = numero3 - numero1; //Resta
const resultadoMultiplicacion = numero1 * numero2; //Multiplicacion 
const resultadoDivicion = numero3 / numero1; //Divicion 

const resultadoSuma2 = numero1 + numero2 * numero3 / numero4;

! Operaciones con variables string (Texto)

const nombre1 = "Pepe";
const nombre2 = "Juan"
const apellido = "Rodriguez";
const espacio = " ";

const nombreCompleto = nombre1 + apellido; //PepeRodriguez
const nombreCompleto1 = nombre1 + nombre2 + apellido; //PepeJuanRodriguez

const nombreCompletoConEspacios = nombre1 + espacio + nombre2 + espacio + apellido; //Pepe Juan Rodriguez
const nombreCompletoConEspacios1 = nombre1 + " " + nombre2 + " " + apellido; //Pepe Juan Rodriguez

console.log(profesor)

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivicion);



! Prompt con string

const nombre = prompt("Ingrese el nombre");
const apellido = prompt("Ingrese el apellido");

const nombreCompleto = nombre + " " + apellido;
console.log("Bienvenido " + nombreCompleto);


! Prompt con integer
!agregamos paraseInt para que me los convierta a integer 
const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese otro numero"));

const resultadoSuma = numero1 + numero2;

console.log(resultadoSuma);




! Alert
const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese otro numero"));

const resultadoSuma = numero1 + numero2;

alert("El resultado de la suma es: " + resultadoSuma); //Se lo muestrta directo a la persona




! Decimales con prompt y parseFloat

const numero = parseFloat(prompt("Ingrese un numero"));
const numero1 = parseFloat(prompt("Ingrese un numero"));

const resultadoNumero = numero + numero1;//Muestra el numero con coma
const resultadoEntero = parseInt(numero + numero1);//Muestra el numero entero 

console.log(resultadoNumero);
console.log(resultadoEntero);

! Condicionales 
if (true){
    const nombre = prompt("Ingrese el nombre");
    console.log("Hola " + nombre)
}

const anio = prompt("Ingrese el año");

if (anio == 2024){
    console.log("El año es 2024")
}

if (anio == 2025){
    console.log("El año es 2024")
} else{
    console.log("El año no es 2024")
}

const anio = prompt("Ingrese el año");


if (anio == 2024){
    console.log("El año es 2024");
} else if ( anio == 2025) {
    console.log("El año es 2025");
} else if ( anio == 2026) {
    console.log("El año es 2026");
} else {
    console.log("El año no es ni 24, 25, 26");
}



! Operadoes logicos

! Es distinto
const numero = 15

if (numero != 10){
    console.log("El numero es distinto de 10")
}

! Mayor, Menor o Igual que

if (numero >  5){
    console.log("El numero es mayor a 5")
}

if (numero < 20){
    console.log("El numero es menor a 20")
}

if (numero >=5){
    console.log("El numero es mayor a 5")
}

if (numero <= 20){
    console.log("El numero es menor o igual a 20")
}
! Operador AND

const nombre = prompt("Ingresar el nombre")
const apellido = prompt("Ingresar el apellido")

if ((nombre == "Pepe") && (apellido == "Rodriguez")){// Las dos condiciones tienen que ser verdaderas
console.log("Bienvenido Pepe Rodriguez")
}

! Operadore OR

if ((nombre == "Pepe") || (nombre == "Juan")){
    console.log("Bienvenido Juan o Pepe")
}
! Operador AND y OR Conjuntos

! Operadores AND conjuntos
const nombre = prompt("Ingrese un nombre")
const apellido = prompt("Ingrese un apellido")
const edad = prompt("Ingrese la edad")

if (
    (nombre == "Pepe") && 
    (apellido == "Rodriguez") && 
    (edad >= 18)
){
    console.log("Bienvenido Pepe Rodrigue, que tiene mas de 18")
}

! Operadores OR conjuntos
const nombre = prompt("Ingrese un nombre")

if (
    (nombre == "Pepe") ||
    (nombre == "Pedro") ||
    (nombre == "Marco")
){
    console.log("Bienvenido Pepe, Pedro, Marcos")
}

! Combinar AND y OR
const nombre = prompt("Ingrese un nombre")
const edad = prompt("Ingrese la edad")

if (
    ((nombre == "Pepe") || (nombre == "Juan")) && (edad >= 18)
){
    console.log("Bienvenido Pepe, Pedro, Marcos")
}

! Operadores estrictos
!Iguales
const numero1 = 15
const numero2 = "15"

if (numero1 == numero2){ //Solo toma diferente el valor del numero
    console.log("Son Iguales")
}

if (numero1 === numero2){ //Toma de diferente el valor del num y el tipo de dato
    console.log("Son Iguales")
}

!Distintos
const numero1 = 15
const numero2 = "15"

if (numero1 != numero2){
    console.log("Son distintos")
}

if (numero1 !== numero2){
    console.log("Son estric distintos")
}

! Operador NOT

const numero1 = 20
const esNumero20 = (numero1 === 20)

if (!esNumero20) {
    console.log("El numero es 20")
}

! Operador de contador

!i++ es lo mismo que poner (i = i + 1)

for (let i = 1; i <= 5; i++){
    console.log(i)
}

for (let i = 1; i <= 5; i++){
    const nombre = prompt("Ingrese nombre")
    console.log(nombre)
}

for (let i = 0; i < 5; i++){
    const nombre = prompt("Ingrese nombre")
    
    if (nombre == "Matias") {
        console.log("Se ingreso Matias")
        break;//Hace que si se cumple la condicion salga del bucle repetidor directamente sin que alla terminado
    }
    
    console.log("Hola " + nombre)
}

for (let i = 0; i < 5; i++){
    const nombre = prompt("Ingrese nombre")

    if (nombre == "Matias" || nombre == "Pedro") {
        continue; //si se ingresa matias o pedro no los cuenta y pasa a iniciarse de nuevo el for 
    }

    console.log("Hola " + nombre)
}

! Operador de Bucle 

let nombre = prompt("Ingrese nombre")

while(nombre != "SALIR"){
    console.log("Su nombre es: " + nombre)
    
    nombre = prompt("INgrese un nuevo nombre, o SALIR para terminar")
}
console.log("Fin ciclo")
let opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))

while(opcion != 0){
    
if (opcion == 1){
    console.log("Atencion al cliente")
} else if(opcion == 2){
    console.log("Soporte tecnico")
} else if(opcion == 3){
    console.log("Ventas")
} else{
    console.log("Opcion invalida")
}
opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))
}

let opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))


while(opcion != 0){
    switch (opcion){
        case 1:
            console.log("Atencion al cliente")
            break;
        case 2:
            console.log("Soporte tecnico")
            break;
        case 3:
            console.log("Ventas")
            break;
        default:
            console.log("Opcion invalida")
            break;
    }
    opcion = parseInt(prompt("Ingrese la opcion 1-Atencion al cliente, 2-Soporte tecnico, 3-Ventas, 0-Salir"))
}

! Funciones 

function imprimirNombre(){
    const nombre = prompt("Ingrese nombre")
    console.log("Su nombre es: " + nombre)
}

imprimirNombre()//para que la funcion pudo funcionar, se la tiene que llamar
imprimirNombre()//puedo llamar a la funcio cuantas veces yo quiera

!Parametros
function saludar(nombre){
    console.log("Hola su nombre es " + nombre)
}
const nombreDePersona = prompt("Ingrese nombre")

saludar (nombreDePersona)

!Funcion con dos parametros

function saludar (mensaje, nombre){
    console.log(mensaje + " " + nombre)
}

saludar("Hola su nombre es:", "Rodrigo")
saludar("Hi", "Rodrigo")

!Funciones con numeros

function sumar(numero1, numero2){
    const resultado = numero1 + numero2
    console.log("El resultado es: " + resultado)
}

sumar(10, 5)//la fincion no detecta tipo de dato!!

function obtenerSaludo(mensaje, nombre){
    return mensaje + " " + nombre
}

const saludo = obtenerSaludo("Hola que tal, Miguel")
console.log(saludo)

function multiplicar(numero1, numero2){
    const resultado = numero1 * numero2
    return resultado
}
function restar(numero1, numero2){
    return numero1 - numero2
}

const resultadoMultiplicacion = multiplicar(5, 2)
const resultadoResta = restar(resultadoMultiplicacion, 3)

console.log(resultadoResta)

!Funciones anonimas

const multiplicar = function(numero1, numero2){
    return numero1 * numero2
}

const numero1 = parseInt(prompt("Ingrese numero"))
const numero2 = parseInt(prompt("Ingrese otro numero"))

const resultadoMultiplicacion = multiplicar(numero1, numero2)
console.log(resultadoMultiplicacion)

!Funciones flecha
!la tipica
const multiplicar = function(numero1, numero2){
    return numero1 * numero2
}

!modo felcha con retung
const multiplicar = (numero1, numero2) => numero1 * numero2

const resultadoMultiplicacion = multiplicar(25, 2)
console.log(resultadoMultiplicacion)
!flecha sin retung

const saludar = (nombre) => {
    console.log("hola como esats" + nombre)
}
saludar()
*/






