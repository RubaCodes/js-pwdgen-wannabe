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

//una password piu random partendo sempre dall'input,grazie stackoverflow ,anche se il randomizer non e' cosi' random
//let shuffledPassword = password.split('').sort(function(){return 0.5-Math.random()}).join('');

//document.getElementById('shuffledPassword').innerHTML = shuffledPassword;


//algoritmo totalemente random :The Fisher-Yates algorith ==> https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const passwordToArray = password.split('');

const shuffledPassword = shuffleArray(passwordToArray).join('');

document.getElementById('shuffledPassword').innerHTML = shuffledPassword;


console.log(password);
console.log(shuffledPassword);