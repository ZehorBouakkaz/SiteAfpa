let ageSaisi;
let genreSaisi;
//La méthode getElementById() de Document renvoie un objet Element 

let bouton = document.getElementById('bouton');
let message= document.getElementById('message');
function verifierImposition(){
    //recupérer la valeur de l'age et du genre avec la fonction value
    ageSaisi=document.getElementById('age-saisi').value;
 genreSaisi=document.getElementById('genre-saisi').value;
 //Notre condition :
 if(genreSaisi=="H" && ageSaisi>20){
    //afficher la partie div id="message"
    message.innerHTML='<div class="alert alert-danger" role ="alert"> Vous étes non imposable!</div>';
 }
 else if( genreSaisi=="F" && ageSaisi>18 && ageSaisi<35 ){
    //afficher un message alert de couleur rouge avec bootsrap 
    message.innerHTML='<div class="alert alert-danger" role ="alert"> Vous étes non imposable!</div>';
 }
 else {
        //afficher un message alert de couleur bleu avec bootstrap
    message.innerHTML='<div class="alert alert-success" role ="alert"> Vous étes imposable!</div>';
 }
}
//Ajouter d'un écouteur d'évenement sur le bouton qui au click appelera la fonction verifierImposition();
// a l'evenement click sur le bouton on fait appelle a la fonction verifierImosition
bouton.addEventListener('click',verifierImposition,false)