//! PREENTREGA1

//Maquina que ingrese cada alumno de la escuela con sus notas y le de su promedio 
/*
!Funciones
const promedio = (
    nota1, 
    nota2, 
    nota3, 
    nota4
) => (nota1 + nota2 + nota3 + nota4) / 4

!Inicio programa

let nombre = prompt("Ingrese nombre")
let apro = 0
let desa = 0
let mejoralumno = 0
let mejornota = 0
while(nombre != "Salir"){
    const nota1 = parseInt(prompt("Ingrese la nota 1"))
    const nota2 = parseInt(prompt("Ingrese la nota 2"))
    const nota3 = parseInt(prompt("Ingrese la nota 3"))
    const nota4 = parseInt(prompt("Ingrese la nota 4"))

    const notapromedio = promedio(
        nota1,
        nota2,
        nota3,
        nota4,
    )
    if (notapromedio >= 6){
        console.log("Alumno: " + nombre)
        console.log("Nota final: " + notapromedio + " " + "Aprobado")
        apro++
    } else{     
        console.log("Alumno: " + nombre)
        console.log("Nota final: " + notapromedio + " " + "Desaprobado")  
        desa++
    }
    if (notapromedio > mejoralumno){
        mejoralumno = nombre
        mejornota = notapromedio
    }
    nombre = prompt("Ingrese un nuevo nombre, o Salir para terminar")
}

console.log("Cantidad de alumnos Aprobados: " + apro)
console.log("Cantidad de alumnos Desaprobados: " + desa)
console.log("Alumno con mejor promedio: " + mejoralumno + " " + mejornota)

*/






//! PREENTREGA2

// Variables globales
let nombre = prompt("Ingrese su nombre:");
let operaciones = [];

// Objeto que almacena una operación
class Operacion {
    constructor(tipo, valor1, valor2, resultado) {
        this.tipo = tipo;
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.resultado = resultado;
    }
}

// Funciones para las operaciones básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        alert("No se puede dividir por 0");
        return null;
    }
}

// Capturar operación del usuario
function realizarOperacion() {
    let tipo = prompt(`Hola ${nombre}, ¿qué operación te gustaría hacer? (sumar, restar, multiplicar, dividir)`).toLowerCase();
    let valor1 = parseFloat(prompt("Ingrese el primer valor:"));
    let valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
    let resultado;

    switch (tipo) {
        case 'sumar':
            resultado = sumar(valor1, valor2);
            break;
        case 'restar':
            resultado = restar(valor1, valor2);
            break;
        case 'multiplicar':
            resultado = multiplicar(valor1, valor2);
            break;
        case 'dividir':
            resultado = dividir(valor1, valor2);
            break;
        default:
            alert("Operación no válida");
            return;
    }

    if (resultado !== null) {
        alert(`El resultado es: ${resultado}`);
        let operacion = new Operacion(tipo, valor1, valor2, resultado);
        operaciones.push(operacion);
    }
}

// Filtrar operaciones realizadas
function filtrarOperaciones(tipo) {
    let filtradas = operaciones.filter(operacion => operacion.tipo === tipo);
    console.log(`Operaciones de tipo ${tipo}:`, filtradas);
}

let continuar = true;

while (continuar) {
    realizarOperacion(); 
    continuar = confirm("¿Quieres realizar otra operación?");
}

// Ejemplo de cómo filtrar
filtrarOperaciones('sumar');












