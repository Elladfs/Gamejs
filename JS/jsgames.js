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
// arme
var weappon = {
    init: function (weapon, degats, positionarmeX, positionarmeY, imgarms) {
        this.weappon = "";
        this.degats = "";
        this.positionarmeX;
        this.positionarmeY;
        this.imgarms;
    },
    decrire = function () {
    var description = this.arme + "fait " + this.degats + "degats.";
    return description;

};
}
var epee = Object.create(weappon);
epee.weappon = (epee, 30,//imgarms);
var masse = Object.create(weappon);
masse.weappon = (masse, 40,//imgarms);
var arc = Object.create(weappon);
arc.weappon = (arc, 50,//imgarms);
var dague = Object.create(weappon);
dague.weappon = (dague, 45,//imgarms);


// personnage
var Personnage = {
    init: function (nom, life, defense, attaque, arme, postionX, positionY) {
        this.nom = "";
        this.life = 100;
        this.defense = false;
        this.attaque = false;
        this.arme = degat;
        this.positionX =;
        this.positionY =;
    },
    this.modedefense = function (one) {
    this.defense = true;
};
this.modeattaque = function () {
    this.defense = true;
};
decrire = function () {
    var description = this.name + " a " + this.life + " points de vie, ";
    return description;
};
}

var boutongamer1 = document.getElementById('defense');
boutongamer1.addEventListener('click', gamer1.modedefense);

// gestion du game
function seteventlistner()

// gestion des touches pour le déplacement des gamers
document.addEventListener("keypress", function (e))
{
    if (e.keyCode == 40) {
        Personnage
    }
};
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