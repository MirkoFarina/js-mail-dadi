const buttonGioco = document.getElementById('dadi');
const outputDadi = document.getElementById('risultato-dadi');
let risultato ;
const max = 6;
const min =  1;



buttonGioco.addEventListener('click', function (){
  const numeroComputer = Math.floor(Math.random() * max ) + min;
  const numeroUtente = Math.floor(Math.random() * max ) + min;



  if (numeroComputer > numeroUtente) {
    risultato = 'Computer win';
  } else if (numeroComputer < numeroUtente) {
    risultato = 'Utente win';
  } else {
    risultato = 'Pari';
  }

  outputDadi.innerHTML = risultato;
})



