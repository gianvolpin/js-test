let signoCuenta
let Num1
let Num2
let username = prompt("Cual es su nombre?");



function saludar(name="Desconocido"){
    alert("Hola buen dia, " + name);
}



saludar(username)

let elegir = parseFloat(prompt("Que quieres hacer?//1. Calculadora 2. Ver productos"));
if( elegir == 1)
{
    console.log("Calculadora");
    signoCuenta = prompt("Signo");
    Num1 = parseFloat(prompt("Primer Numero"));
    Num2 = parseFloat(prompt("Segundo numero"));
    calculator.operator = signoCuenta;
    calculator.a = Num1;
    calculator.b = Num2;
} else if( elegir == 2){


} else if( elegir > 2)





function calculator(a, b, operator){
    switch (operator) {
        case '+':
            return a + b
            case '-':
            return a - b
            case '*':
            return a * b
            case '/':
            return a / b
            case '%':
            return a % b
        default:
            return ()=> "Opcion no valida"

    }
}

console.log(calculator(Num1,Num2,signoCuenta));


const servicios = [
    { id: 1, nombre: "Pelopincho", precio: 2500},
    { id: 2, nombre: "Vaciado", precio: 3500},
    { id: 3, nombre: "BarreFondo", precio: 2000},
    { id: 4, nombre: "LimpiezaTotal", precio: 10000},
];



