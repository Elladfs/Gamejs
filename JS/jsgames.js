/**
 * Created by emiliebugnon on 20/05/2016.
 */
/* activité Js :
 4 prototypes:
 - map 10*10 grille
 - weapons ( 4 armes)
 - gamers ( mini 2 jrs )
 - game (prise en charge de la position)
 code configurable
 Evenements marquant :
 sur la map certaines case sont incassessible grisée (fixe)
 a chaque tours : un a trois déplacement par joueurs (bouton
 pour choix attaque/défense )
 - chaque joueur peux choisir si il attaque ou defend
 - chaques armes : caract' propre et visuel
 - chaques joueurs: vie init' 100
 -  si joueur défend  dégat 50% - que si joueur attaque
 -  si joueur plus de point de vie = alert('dead').
 - si deux joueurs sur case adjacente = attaque et combat à mort.

 */
// carte
var map={
    init: function(Caccessible,Cinaccessible){
        this.Caccessible= true ;
        this.Cinccecssible= false;
    },
    if 
};
// arme
var weappon = {
    init: function (weapon, degats, positionarmeX, positionarmeY, imgarms) {
        this.weappon = "";
        this.degats = "";
        this.positionarmeX;
        this.positionarmeY;
        this.imgarms;
},
    decrire = function(){
    var description= this.arme + "fait "+ this.degats+ "degats.";
    return description;

}
};
var weappon1 = Object.create(weappon);
weappon1.weappon=(epee,30,//imgarms);
var weappon2 = Object.create(weappon);
weappon2.weappon=(masse,40,//imgarms);
var weappon3= Object.create(weappon);
weappon3.weappon= (arc,50,//imgarms);
var weappon4 = Object.create(weappon);
weappon4.weappon= (dague,45,//imgarms);


// personnage
var Personnage = {
    init: function (nom,life,defense,attaque,arme,postionX,positionY) {
        this.nom = "";
        this.life = 100;
        this.defense = false;
        this.attaque = false;
        this.arme = degat;
        this.positionX = "";
        this.positionY = "";
    },
    this.modedefense = function (one){
    this.defense=true;
}
    this.modeattaque= function(){
this.defense=true;
}
    decrire = function(){
    var description = this.name + " a " + this.life + " points de vie, ";
    return description;
}
};


var gamer1 = Object.create(Personnage);
perso1.nom = prompt('entrer le nom de votre personnage');

var gamer2 = Object.create(Personnage);
perso2.nom = prompt('entrer le nom de votre personnage');

var boutongamer1= document.getElementById('defense');
boutongamer1.addEventListener('click', gamer1.modedefense);

// gestion du game
function seteventlistner();


// keydown qui va gerer les déplacements des joueurs ( objects pour gerer j1 et J2)
// penser à faire un retour pour avoir information qui s'affiche dans la console du la page
// results.innerHTML pour renvoyer les resutlats dans la box controlArray

/* myDiv.addEventListener('keypress', function(e) {

 var relatedTarget = e.relatedTarget;

 while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
 relatedTarget = relatedTarget.parentNode;
 }

 if (relatedTarget != myDiv) {
 results.innerHTML += "//position du joueur";
 }

 });*/