var Cpt,Total,saisie,Recherche,Moy,Meilleur,Pire;
Cpt = 0;
var tabJoueur = new Array(4);
var tabPoint = new Array(4);
/*
document.getElementById("lblReponse").innerHTML = "Voici votre reponse : ";
Nom = document.getElementById("lblNbreJoueur").value;
*/

function btnAjouterJoueur_onclick() //fonction ajoute joueur
{
    tabJoueur[Cpt] =  document.getElementById("txtNom").value;
    tabPoint[Cpt] = parseFloat(document.getElementById("txtPoints").value);
    Cpt++;
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + (Cpt+1);

    if(Cpt > 3)
    {
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
    }
}
function btnTrouverMoy_onclick()
{
    moy =0;
    Total =0;
    for(var i =0; i < tabPoint.length; i++)
    {
        Total += tabPoint[i];
    }
    moy = Total/tabJoueur.length;
    document.getElementById("lblReponse").innerHTML = "Numéro du joueur " + moy;
}
function btnTrouverBest_onclick()
{

}