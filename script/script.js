// Chiedi all’utente il suo nome,
const userName = prompt('Inserisci il tuo nome:');
// poi chiedi il suo cognome
const userLastName = prompt('Inserisci il tuo Cognome:');
// poi chiedi il suo colore preferito
const favoriteColor = prompt('Inserisci il tuo Colore preferito:');

//store della password
const password = `${userName}${userLastName}${favoriteColor}21`;
//print della password sul documento
document.getElementById('password').innerHTML = password;