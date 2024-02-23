function Comprobar() {

   const calificacion = parseFloat(document.getElementById("inputCalificacion").value);


    if (calificacion >= 0 && calificacion <= 10) {

        var mensaje;
        if (calificacion < 5) {
            mensaje = "Suspenso";
        } else if (calificacion < 6) {
            mensaje = "Suficiente";
        } else if (calificacion < 7) {
            mensaje = "Bien";
        } else if (calificacion < 9) {
            mensaje = "Notable";
        } else {
            mensaje = "Sobresaliente";
        }


        document.getElementById("resultado").innerHTML = mensaje;
    } else {

        document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida";
    }
}

