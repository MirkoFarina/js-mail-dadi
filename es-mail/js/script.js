//DATI
const emailUtente = document.querySelector('[type="email"]');
const button = document.querySelector('[type="submit"]');
const output = document.querySelector('p');
const utentiRegistrati = [
'pippo@gmail.it', 
'ciaobro@outlook.it', 
'okfra@gmail.it', 
'ciaogoogle@gmail.com',
'mirkofarina@outlook.com', 
];



//LOGICA
button.addEventListener('click', checkEmail );

function checkEmail () {
  let stampOutput;
  let utentiPresenti;

  for (let i = 0; i < utentiRegistrati.length; i++){
 
    utentiPresenti = utentiRegistrati[i];
  }
  console.log(utentiPresenti);
  if (emailUtente.value === utentiPresenti) {
    stampOutput = 'Bentornato, hai 50 messaggi da leggere';
  }else {
    stampOutput = 'Ci dispiace non sei registrato';
  }
  
  
  output.innerHTML = stampOutput;
}




