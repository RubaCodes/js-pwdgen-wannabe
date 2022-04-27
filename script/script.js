// Chiedi all’utente il suo nome,
const userName = prompt('Inserisci il tuo nome:');
// poi chiedi il suo cognome
const userLastName = prompt('Inserisci il tuo Cognome:');
// poi chiedi il suo colore preferito
const favoriteColor = prompt('Inserisci il tuo Colore preferito:');
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const password = `${userName}${userLastName}${favoriteColor}21`;

document.getElementById('password').innerHTML = password;