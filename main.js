// El simulador carga 3 Usuarios y les asigna un numero de cliente. Depende de
// la cantidad de hambre y de si va a comer postre, se estipula la cantidad de
// milanesas y postre.
for (i = 0; i < 3; i++) {

    let nombrePersona = prompt(
        "Bienvenido al Simulador de Milangas 2000.\nIngresa tu nombre: "
    );
    console.log("el cliente n°" + i + " se llama " + nombrePersona);
    let inicioJuego = parseInt(
        prompt("¿Queres jugar al juego de Milangas? \n1- Si \n2 - No")
    );
    if (inicioJuego == 1) {
        let nivelHambre = parseInt(
            prompt("Ingresa tu nivel de hambre, del 1 al 3.\n1 - Bajo\n2 - Medio\n3 - Alto")
        );
        if ((nivelHambre == 1) || (nivelHambre == 2) || (nivelHambre == 3)) {
            let guardarEspacioPostre = parseInt(
                prompt("Pensas comer postre? \n1 - Si \n2 - No")
            );
            switch (nivelHambre) {
                case 1:
                    if ((nivelHambre == 1) && (guardarEspacioPostre == 1)) {
                        alert(
                            "Deberias comer 1 Milanesa, poquita guarnición y disfrutar del postrecito"
                        );
                        console.log(
                            "El usuario " + nombrePersona +
                            " no tiene casi hambre, pero quiere comer postre"
                        );
                        console.log("Preparar una Milanesa con guarnición y un postre.");
                    } else if ((nivelHambre == 1) && (guardarEspacioPostre == 2)) {
                        alert("No comas amigo, te va hacer mal. Tomate un tesito nomas.");
                        console.log(
                            "El usuario " + nombrePersona +
                            " No tiene hambre, ni quiere postre. Alto debil."
                        );
                        console.log("El usuario desprecia la comida. Esta mal visto por la sociedad.");
                    } else {
                        alert("Seleccionaste una opción incorrecta.")
                        console.log(
                            "El usuario " + nombrePersona + " Seleccionó una opción incorrecta."
                        );
                    }
                    break;
                case 2:
                    if ((nivelHambre == 2) && (guardarEspacioPostre == 1)) {
                        alert("Deberias comer 2 Milanesas para poder disfrutar de ese postre hermoso.");
                        console.log(
                            "El usuario " + nombrePersona + " está medio hambriento y quiere comer postre. " +
                            "lo respeto."
                        );
                        console.log("Preparar 2 Milanesas y postre.");
                    } else if ((nivelHambre === 2) && (guardarEspacioPostre === 2)) {
                        alert("Te recomiendo comer 2 Milanesas y preguntar si hay café con masitas.");
                        console.log(
                            "El usuario " + nombrePersona + " está medio hambriento, pero prefiere Café a p" +
                            "edir postre."
                        );
                        console.log("Preparar 2 Milanesas y preparar un cafécito.");
                    } else {
                        alert("Seleccionaste una opción incorrecta.");
                        console.log(
                            "El usuario " + nombrePersona + " Seleccionó una opción incorrecta."
                        );
                    }
                    break;
                case 3:
                    if ((nivelHambre == 3) && (guardarEspacioPostre == 1)) {
                        alert("Deberias comer 3 Milanesas, para dejar espacio para el postre.");
                        console.log(
                            "El usuario " + nombrePersona + " tiene mas hambre que el chavo y quiere postre" +
                            ", probablemente repita."
                        );
                        console.log("Preparar 3 Milanesas y 1 postre.");
                    } else if ((nivelHambre === 3) && (guardarEspacioPostre === 2)) {
                        alert("Deberias comer 4 Milanesas, el postre es para los debiles.");
                        console.log(
                            "El usuario " + nombrePersona + " tiene mas hambre que el chavo y no le cabe es" +
                            "o de los postres"
                        );
                        console.log(
                            "Preparar 4 Milanesas y tirar el postre a los perros. Tener en cuenta que quiza" +
                            "s pida una milanga mas."
                        );
                    } else {
                        alert("Seleccionaste una opción incorrecta.");
                        console.log(
                            "El usuario " + nombrePersona + " Seleccionó una opción incorrecta."
                        );
                    }
                    break;
                default:
                    alert("Estas eligiendo una opción que no es correcta. Revisá el menú.");
                    console.log(
                        "El usuario " + nombrePersona + " Seleccionó una opción incorrecta."
                    );

            }
        } else {
            alert("Seleccionaste una opción incorrecta. Por favor vuelve a empezar.")
            console.log(
                "El usuario " + nombrePersona + " seleccionó un nivel de hambre inexistente."
            );
        }
    } else if (inicioJuego == 2) {
        alert("No te preocupes, podes volver a jugar cuando tengas ganas.");
        console.log(
            "El usuario " + nombrePersona + " seleccionó que no quiere jugar."
        );
    } else {
        alert(
            "Seleccionaste una opción incorrecta. Por favor selecciona una opción correcta."
        );
        console.log(
            "El usuario " + nombrePersona + " seleccionó una opción incorrecta en el menú p" +
            "rincipal."
        );

    }
}