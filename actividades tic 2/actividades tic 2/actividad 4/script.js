
function Calcular() {
    
    const a = parseFloat(prompt("Ingrese el primer número (a):"));
    const b = parseFloat(prompt("Ingrese el segundo número (b):"));

    
    const suma = a + b;
    const resta = a - b;
    const multiplicacion = a * b;

   
    var division, modulo;
    if (b !== 0) {
        division = a / b;
        modulo = a % b;
    } else {
        division = "No se puede dividir por cero";
        modulo = "No se puede calcular módulo por cero";
    }


    const resultado = (
        "Valor del primer número (a): " + a + "\n" +
        "Valor del segundo número (b): " + b + "\n" +
        "Suma (a + b): " + suma + "\n" +
        "Resta (a - b): " + resta + "\n" +
        "Multiplicación (a * b): " + multiplicacion + "\n" +
        "División (a / b): " + division + "\n" +
        "Módulo (a % b): " + modulo
    );

    
    alert(resultado);
}

