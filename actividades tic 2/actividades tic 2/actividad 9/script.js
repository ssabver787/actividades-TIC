function Factorial() {
    const numero = parseInt(document.getElementById("inputNumero").value);
    const resultado = 1;
    const iteracion = 1;

    while (iteracion <= numero) {
        resultado *= iteracion;
        iteracion++;
    }

    document.getElementById("resultadoWhile").innerHTML = `El factorial de ${numero} es: ${resultado}`;
}

function FactorialPara() {
    const numeroPara = parseInt(document.getElementById("inputNumero").value);
    var resultadoPara = 1;

    for (var i = 1; i <= numeroPara; i++) {
        resultadoPara *= i;
    }

    document.getElementById("resultadoFor").innerHTML = `El factorial de ${numeroPara} es: ${resultadoPara}`;
}

