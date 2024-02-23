function MensajeSwitch() {
    const horaSwitch = parseInt(document.getElementById("inputHoraSwitch").value);

    switch (true) {
        case horaSwitch >= 7 && horaSwitch <= 11:
            document.getElementById("resultadoSwitch").innerHTML = "Buenos días";
            break;
        case horaSwitch >= 12 && horaSwitch <= 21:
            document.getElementById("resultadoSwitch").innerHTML = "Buenas tardes";
            break;
        default:
            document.getElementById("resultadoSwitch").innerHTML = "Buenas noches";
    }
}

function MensajeIf() {
    const horaIf = parseInt(document.getElementById("inputHoraIf").value);

    if (horaIf >= 7 && horaIf <= 11) {
        document.getElementById("resultadoIf").innerHTML = "Buenos días";
    } else if (horaIf >= 12 && horaIf <= 21) {
        document.getElementById("resultadoIf").innerHTML = "Buenas tardes";
    } else {
        document.getElementById("resultadoIf").innerHTML = "Buenas noches";
    }
}

