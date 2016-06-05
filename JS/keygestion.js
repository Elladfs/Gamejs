/**
 * Created by emiliebugnon on 03/06/2016.
 */
var Deplacement = {
    init: function (haut, bas, droite, gauche, nomouv);
{
    this.haut = KEY_DOWN;
    this.bas =  KEY_UP;
    this.droite =KEY_RIGHT;
    this.gauche =KEY_RIGHT;
    this.nomouv = 0;
}
KEY_DOWN	= 40;
KEY_UP		= 38;
KEY_LEFT	= 37;
KEY_RIGHT	= 39;
function keypressHandler(){
}
// carte
var map = {
    init: function (Caccessible, Cinaccessible, table) {
        this.Caccessible = true;
        this.Cinaccecssible = grise;
        this.getElementbyTagName("table");
    };
// gestion du mouvement
var move = {
    init: function (axeX, AxeY) {
        this.axeX =
    }
};

var table = document.getElementsByClassName(Map);
var tableArr = [];
{
    for (var i = 1, i≤10, i++){
    // table.rows[i].cell[0].innerHTML,
    for (var j = 1, j<10, j++){
      /*  if (table.rows[i].cell[j].className = "grise") {
            table.rows[i].cell[j].innerHTML = 0
        } else {
            table.rows[i].cell[j].innerHTML = 1
        };*/

    }

};

};

getElementsByClassName("grise");
// gestion du déplacement

// gestion des touches pour le déplacement des gamers
document.addEventListener("keypress", function (e))
{
    if (e.keyCode == 40) {
        Personnage
    }if(e.keyCode == 38){
Personnage}
    if(e.keyCode==37){
    Personnage}
    if(e.keyCode== 39){
    }
}
    }
};
getElementsByClassName("table");
var lignePersonnage;
var cellPersonnage;
table.rows[lignePersonnage].cell[cellPersonnage]
    table.rows[lignePersonnage +1].cell[cellPersonnage]
// gestion de l'accessibilité de la case

function (moveup){
    if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
        alert("Mouvement impossible");
    } else {
        table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
            table.rows[lignePersonnage+1].cell.innerHTML('O')
    };
}
function(movedown){
    if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
        alert("Mouvement impossible");
    } else {
        table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
            table.rows.cell[cellPersonnage+1].innerHTML('O')
    };
}
function (moveleft) {
    if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
        alert("Mouvement impossible");
    } else {
        table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
            table.rows[lignePersonnage-1].cell.innerHTML('O')
    };
}
function (moveright) {
    if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
        alert("Mouvement impossible");
    } else {
        table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
            table.rows[lignePersonnage].cell[cellPersonnage-1].innerHTML('O')
    };
}