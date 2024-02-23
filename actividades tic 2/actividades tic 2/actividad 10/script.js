function Calificar() {
 
    const alumnos = ["Juan", "María", "Carlos", "Ana"];


    const notas = [];


    for (var i = 0; i < 4; i++) {

        var nota = parseFloat(prompt(`Ingrese la nota de ${alumnos[i]}:`));

   
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            notas.push(nota);  
        } else {
            alert("Por favor, ingrese una nota válida (entre 0 y 10).");
          
            i--;
        }
    }

 
    var resultadoMensaje = "Resultados:\n";
    for (var j = 0; j < 4; j++) {
        resultadoMensaje += `${alumnos[j]} - Nota: ${notas[j]}\n`;
    }

    document.getElementById("resultado").innerText = resultadoMensaje;
}

