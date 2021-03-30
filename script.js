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
console.log('Hai scelto: ' + pariDispari);
//e inserisce un numero da 1 a 5.
var NumeroUtente = parseInt(prompt('inserisci un numero da 1 a 5.').trim().toLowerCase());
console.log('Il numero che hai scritto è ' + NumeroUtente);
var NumeroComputer = numeroRandom();
console.log('Il numero del computer è ' + NumeroComputer)
//Sommiamo i due numeri
var somma;
somma = NumeroUtente + NumeroComputer;
console.log('La somma è ' + somma);
console.log('Il risultato è ' +  pariODispari(somma));

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  /* if(somma % 2 ==0  && pariDispari === 'pari'){
     console.log('hai vinto')
 }else if(somma % 2 !== 0 && pariDispari === 'dispari'){
    console.log('hai vinto');
 }else{
     console.log('hai perso')
 }  */
if (pariODispari(somma)=== pariDispari){
    console.log('Hai vinto!');
}else{
    console.log('Hai perso!');
}  
function pariODispari(num){
    if(num % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(){
    var rand = parseInt(Math.floor(Math.random()*5 +1));
    console.log(rand);
    return rand;
}