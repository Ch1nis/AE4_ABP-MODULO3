
//1: ¿Qué es una función?

// Una función es un bloque de código reutilizable que realiza una tarea específica. 
// Su propósito es permitir la organización del código, facilitar la reutilización y hacer que los programas sean más legibles y mantenibles.

//2: Definir funciones
function calcularGastosTotales(renta, comida, transporte) {
  return renta + comida + transporte;
}

//3: Paso de parámetros en una función
function calcularAhorroMensual(ingresosMensuales, gastosTotales) {
  return ingresosMensuales - gastosTotales;
}


//4: Retorno de una función
let gastos = calcularGastosTotales(5000, 2000, 1500);
let ahorro = calcularAhorroMensual(12000, gastos);
console.log("Ej4_Ahorro mensual estimado:", ahorro);

//5: Variables locales y variables globales
let moneda = "MXN";

function mostrarResumenFinanciero() {
  let ingresos = 8000;
  let gastos = 4500;
  let ahorro = ingresos - gastos;
  console.log(`Ej5_Resumen Financiero: Ingresos: ${ingresos} ${moneda}, Gastos: ${gastos} ${moneda}, Ahorro: ${ahorro} ${moneda}`);
}
mostrarResumenFinanciero();

//6: Invocación de una función
const ahorroDirecto = calcularAhorroMensual(12000, calcularGastosTotales(5000, 2000, 1500));
console.log(`Ej6_Ahorro calculado en una línea: ${ahorroDirecto} ${moneda}`);

//8: El problema de las variables globales
let descuento = 100;

function calcularDescuento() {
  let descuento = 50;
  console.log("Ej8_Descuento dentro de la función:", descuento);
}

console.log("Ej8_Descuento global antes:", descuento);
calcularDescuento();
console.log("Ej8_Descuento global después:", descuento);


//9: Crear una función anidada
function gestionarFinanzas(ingresos, renta, comida, transporte) {
  let gastosTotales = calcularGastosTotales(renta, comida, transporte);
  let ahorro = calcularAhorroMensual(ingresos, gastosTotales);

  function imprimirResumen() {
    console.log(`Ej9_Tus gastos fueron de ${gastosTotales} ${moneda} y tu ahorro fue de ${ahorro} ${moneda}.`);
  }

  imprimirResumen();
}
gestionarFinanzas(12000, 5000, 2000, 1500);

//7: Alcance de las variables locales
function verificarSaldo() {
  let saldoSeguro = 3000;
  console.log("Ej7_Saldo dentro de la función:", saldoSeguro);
}
verificarSaldo();