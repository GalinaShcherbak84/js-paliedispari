 /* //Chiedere all’utente di inserire una parola 
 var parola = prompt('Inserisci una parola.').toLowerCase(); 
 console.log(parola); 
 var parolaAlContrario = reverse(parola); 
 console.log(parolaAlContrario); 
 if(parola === parolaAlContrario){ 
     document.getElementById('stampa').innerHTML = 'La parola inserita è palindroma';
 }else{ 
     document.getElementById('stampa').innerHTML = 'La parola inserita non è palindroma';
 } 
 //Creare una funzione per capire se la parola inserita è palindroma 
 function reverse(word){ 
     var parolaReverse =''; 
    for(var i = word.length -1; i >= 0; i--){ 
         parolaReverse += word[i]; 
    } 
     return parolaReverse; 
 }  */


//L’utente sceglie pari o dispari
var pariDispari = prompt('Pari o dispari?').trim().toLowerCase();
console.log(pariDispari);
//e inserisce un numero da 1 a 5.
var NumeroUtente = parseInt(prompt('inserisci un numero da 1 a 5.').trim().toLowerCase());
console.log(NumeroUtente);
//Sommiamo i due numeri
var NumeroComputer = numeroRandom();
var somma;
somma = NumeroComputer + NumeroUtente;
PariODispari();
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function PariODispari(){
    if(somma % 2 === 0){
    console.log('pari');
}else{
    console.log(dispari)
}
}
somma = NumeroComputer + NumeroUtente;
console.log(somma);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(){
    var rand = parseInt(Math.floor(Math.random()*5 +1));
    console.log(rand);
    return rand;
}