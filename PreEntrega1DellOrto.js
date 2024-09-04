//Maquina que ingrese cada alumno de la escuela con sus notas y le de su promedio 

//!Funciones
const promedio = (
    nota1, 
    nota2, 
    nota3, 
    nota4
) => (nota1 + nota2 + nota3 + nota4) / 4

//!Inicio programa

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
















