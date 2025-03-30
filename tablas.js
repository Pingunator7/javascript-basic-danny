function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar de " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

  
const numero = 5;  
tablaMultiplicar(numero);