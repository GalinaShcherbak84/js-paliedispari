//Chiedere all’utente di inserire una parola
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
}