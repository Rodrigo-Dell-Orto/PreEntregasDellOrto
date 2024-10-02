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





! PRE ENTREGA 2

//Calculadora basica

let nombre = prompt("Ingrese su nombre:");
let operaciones = [];


class Operacion {
    constructor(tipo, valor1, valor2, resultado) {
        this.tipo = tipo;
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.resultado = resultado;
    }
}


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
}g


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


function filtrarOperaciones(tipo) {
    let filtradas = operaciones.filter(operacion => operacion.tipo === tipo);
    console.log(`Operaciones de tipo ${tipo}:`, filtradas);
}

let continuar = true;

while (continuar) {
    realizarOperacion(); 
    continuar = confirm("¿Quieres realizar otra operación?");
}

filtrarOperaciones('sumar');

*/






//! PRE ENTREGA 3

// Obtener elementos del DOM 
const form = document.getElementById('nota-form')
const resultDiv = document.getElementById('result')
const messageDiv = document.getElementById('message')
const otroPromedioBtn = document.getElementById('otro-promedio-btn')
const historialDiv = document.getElementById('historial')

// Funciones
function calcularPromedio(notas) {
    const total = notas.reduce((acc, nota) => acc + nota, 0)
    return total / notas.length
}

function guardarEnHistorial(nombre, promedio) {
    const historial = JSON.parse(localStorage.getItem('historial')) || []
    historial.push({ nombre, promedio })
    localStorage.setItem('historial', JSON.stringify(historial))
}

function mostrarHistorial() {
    const historial = JSON.parse(localStorage.getItem('historial')) || []
    historialDiv.innerHTML = '<h2>Historial de Promedios</h2>'

    historial.forEach(entry => {
        const div = document.createElement('div')
        div.textContent = `Nombre: ${entry.nombre}, Promedio: ${entry.promedio.toFixed(2)}`
        historialDiv.appendChild(div)
    })
}

//Inicio programa
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const nota1 = parseFloat(document.getElementById('nota1').value)
    const nota2 = parseFloat(document.getElementById('nota2').value)
    const nota3 = parseFloat(document.getElementById('nota3').value)
    const nota4 = parseFloat(document.getElementById('nota4').value)

    // Calcular el promedio
    const promedio = calcularPromedio([nota1, nota2, nota3, nota4])

    // Mostrar el resultado en el DOM
    resultDiv.textContent = `El promedio de ${nombre} es: ${promedio.toFixed(2)}`

    // Determinar si el alumno está aprobado o no
    if (promedio >= 6) {
        messageDiv.textContent = "Estado: Aprobado"
        messageDiv.style.color = "green"
    } else {
        messageDiv.textContent = "Estado: Desaprobado"
        messageDiv.style.color = "red"
    }

    guardarEnHistorial(nombre, promedio)

    mostrarHistorial()

    otroPromedioBtn.style.display = 'block'
});

// Evento para restablecer el formulario
otroPromedioBtn.addEventListener('click', function () {
    form.reset()
    resultDiv.textContent = ''
    messageDiv.textContent = ''
    otroPromedioBtn.style.display = 'none'
});
