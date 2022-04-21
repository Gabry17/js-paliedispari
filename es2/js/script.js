// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const evenOrOdd = prompt('pari o dispari?');
const addN = parseInt(prompt('inserire numero da 1 a 5'));


if(evenOrOdd === 'pari' || evenOrOdd === 'dispari'){
    console.log(`scelta: ${evenOrOdd}`);
} else {
    alert('non hai selezionato pari o dispari');
}

if(addN >= 1 && addN <= 5){
    console.log(`numero: ${addN}`);
} else {
    alert('non hai selezionato un numero');
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let addNpc = numRandom(1,5);
console.log(`numero scelto dal pc: ${addNpc}`);
// Sommiamo i due numeri

let sum = addN + addNpc;
console.log(`totale ${sum}`);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

let sumIsEorO = number(sum);
console.log(sumIsEorO); 
// Dichiariamo chi ha vinto.

let winner;

if (evenOrOdd === 'pari' && sumIsEorO === 'il risultato è pari'){
    winner = 'Bravo, hai vinto';
} else if (evenOrOdd === 'dispari' && sumIsEorO === 'il risultato è dispari'){
    winner = 'Bravo, hai vinto';
} else {
    winner = 'Mi dispiace ma hai perso';
}

console.log(winner);




//FUNCTION
//funzione che genera un numero casuale
//n1 indica il numero di partenza
//n2 indica il numero finale
//return indica il numero casuale tra numero di partenza e numero finale
function numRandom(n1,n2){
    return Math.floor(Math.random() * n2) + n1;
}

//funzione che indica se il numero e pari o dispari
//n indica il numero da selezionare
//return indica il risultato se e pari o dispari 
function number(n){
    let result;
    if(n % 2 === 0){
        result = 'il risultato è pari';
    } else {
        result = 'il risultato è dispari';
    }

    return result;
}
