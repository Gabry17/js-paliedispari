//Chiedere all’utente di inserire una parola
const addWord = prompt('inserire parola');
console.log(`parola inserita: ${addWord}`);

//verifichiamo se la parola è palindroma
if(addWord === reverse(addWord)){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
//Creare una funzione per capire se la parola inserita è palindroma

function reverse(s){
    return s.split("").reverse().join("");
}
