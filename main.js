
const notaExamenFinal = [3, 4, 5, 6, 8, 10] ;
for (let i = 0; i < 6; i++) {
    if (notaExamenFinal[i] < 5) {
        console.log('Te falta mucho estudio');
        console.log('Tu nota Final es: ' + notaExamenFinal[i]);
    }
    if (notaExamenFinal[i] < 6 && notaExamenFinal[i] > 5) {
        console.log('Te falto poco para aprobar');
        console.log('Tu nota Final es: ' + notaExamenFinal[i]);
    }
    if (notaExamenFinal[i] === 6) {
        console.log('Aprobaste muy justo');
        console.log('Tu nota Final es: ' + notaExamenFinal[i]);
    }
    if (notaExamenFinal[i] > 6 && notaExamenFinal[i] < 10) {
        console.log('Felicitaciones, Aprobaste');
        console.log('Tu nota Final es: ' + notaExamenFinal[i]);
    } else {
        if (notaExamenFinal[i] === 10) {
            console.log('Felicitaciones, sos un crack');
            console.log('Tu nota Final es: ' + notaExamenFinal[i]);
        }

    }

}

/*Comprobamos si un numero ingresado es primo o no*/
var numero = parseInt(prompt("Ingrese un número: "));
let resultado = true;
for(let i = 2; i < numero; i++) {
    if(numero % i == 0) { 
                     
      resultado = false;
        
    }
    if(resultado) {
		console.log ("El numero es primo");
		} else {
			console.log ("El numero NO es primo");
		}
}
