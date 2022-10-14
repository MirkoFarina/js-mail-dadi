//DATI

const button = document.querySelector('[type="submit"]');
const output = document.querySelector('p');
const utentiRegistrati = [
'pippo@gmail.it', 
'ciaobro@outlook.it', 
'okfra@gmail.it', 
'ciaogoogle@gmail.com',
'mirkofarina@outlook.com', 
];


button.addEventListener('click', checkEmail);


function checkEmail () {
  const emailUtente = document.querySelector('[type="email"]').value;
  let checkUtente = false;
  let messageOutput;
  console.log(emailUtente);
  //LOGICA
  for(let i = 0; i < utentiRegistrati.length; i++){
    if(emailUtente === utentiRegistrati[i]){
      checkUtente = true;
    }
  }

  if(checkUtente){
    messageOutput = 'Bentornato hai 96 messaggi da leggere';
  }else if (emailUtente === ''){
    messageOutput = 'fornisci email';
  } else {
    messageOutput = 'non sei registrato';
  }

  // output
  output.innerHTML = messageOutput;
}


