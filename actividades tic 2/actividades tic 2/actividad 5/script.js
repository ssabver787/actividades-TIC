function Calcular() {
   
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);

 
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


    var resultadoMensaje = (
        "Valor del primer número (a): " + a + "<br>" +
        "Valor del segundo número (b): " + b + "<br>" +
        "Suma (a + b): " + suma + "<br>" +
        "Resta (a - b): " + resta + "<br>" +
        "Multiplicación (a * b): " + multiplicacion + "<br>" +
        "División (a / b): " + division + "<br>" +
        "Módulo (a % b): " + modulo
    );


    document.getElementById("resultado").innerHTML = resultadoMensaje;
}

