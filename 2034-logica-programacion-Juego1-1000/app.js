//Variables
let numeroSecreto = Math.floor(Math.random()*1000)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez'
let maximosIntentos = 4;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 1000 por favor:"));

    console.log(typeof(numeroUsuario));
    /*
    Este código realiza la comparación
    */

    if (numeroUsuario == numeroSecreto) { 
        //Si acierta el número
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else{
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert('El número es mayor')
        }
        //Incrementa el contador cuando no acierta
        intentos++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //Si no lo acierta
        //alert('Lo siento, no acertaste el número')

    }
}