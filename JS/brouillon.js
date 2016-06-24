/**
 * Created by emiliebugnon on 24/06/2016.
 */

var metaChar = false;
var defaut = 16;
var table = getElementsByClassName("table");
function keyEvent(event) {
    var key = event.keyCode;
    var keychar = String.fromCharCode(key);
    if (key == defaut) {
        metaChar = true;
    }
    if(var keychar == 38){
        if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
            alert("Mouvement impossible");
        } else {
            table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
                table.rows[lignePrsonnage+1].cell.innerHTML('O')
        };
    }
    if(var keychar == 40){
        if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
            alert("Mouvement impossible");
        } else {
            table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
                table.rows.cell[cellPersonnage+1].innerHTML('O')
        };
    }
    if(var keychar == 37){
        if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
            alert("Mouvement impossible");
        } else {
            table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
                table.rows[lignePersonnage-1].cell.innerHTML('O')
        };
    }
    if(var keychar == 39){
        if (table.rows[lignePersonnage +1].cell[cellPersonnage].className = "grise" ||table.rows[lignePersonnage +1].cell[cellPersonnage] == null) {
            alert("Mouvement impossible");
        } else {
            table.rows[lignePersonnage].cell[cellPersonnage].innerHTML('X'),
                table.rows[lignePersonnage].cell[a-1].innerHTML('O')
        };
    if (var keychar == 65){
            //attaque
        }
    if (var keychar == 68){
            //attaque
        }
    }
}