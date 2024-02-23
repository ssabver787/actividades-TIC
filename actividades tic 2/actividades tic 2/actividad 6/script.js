function Comprobar() {

    const numero = parseInt(document.getElementById("inputNumero").value);


    const esPar = numero % 2 === 0;


    const resultadoMensaje = esPar
        ? "El número " + numero + " es par."
        : "El número " + numero + " es impar.";


    document.getElementById("resultado").innerHTML = resultadoMensaje;
}
