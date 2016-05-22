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
var map={
    init: function(Caccessible,Cinaccessible){
        this.Caccessible
        this.Cinccecssible
    },
}
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
},
    this.modeattaque= function(){
this.defense=true;
},
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

function seteventlistner()
