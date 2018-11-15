var Cpt,Meilleur,Pire,Recherche;
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
{   var moy;
    moy = calculerMoy();
}
function calculerMoy()
{ var moy,total;
    moy=0;
    Total =0;
    nomEtu =  0;
    for(var i =0; i < tabPoint.length; i++)
    {
        Total += tabPoint[i];
        nomEtu = tabJoueur[i];
        document.getElementById("lblReponse").innerHTML = "La moyenne est de = " + moy + " pour " + nomEtu;
    }
    moy = Total/tabJoueur.length;
    return moy;
}
function btnTrouverBest_onclick()
{
    trouverMeilleur();
}
function trouverMeilleur()
{
    Meilleur =1;
    bestEtu =0;
    for(var i =0; i < tabPoint.length; i++)
    {
        if(tabPoint[i] > Meilleur )
        {
            Meilleur = tabPoint[i];
            bestEtu = tabJoueur[i];
            document.getElementById("lblReponse").innerHTML = "Le meilleur score est de  = " + Meilleur + " pour " + bestEtu;
        }
    }
    return Meilleur;
}
function  btnTrouverPire_onclick()
{
    nomEtu = document.getElementById("txtNom").value;
    trouverPire();

}
function trouverPire()
{
    Pire = 100;
    pireEtu =0;
    for(var i =0; i < tabPoint.length; i++)
    {
        if(tabPoint[i] < Pire)
        {
            Pire = tabPoint[i];
            pireEtu = tabJoueur[i];
            document.getElementById("lblReponse").innerHTML = "Le pire score est de  = " + Pire + " pour " + pireEtu;
        }
    }
}
function btnRechercher_onclick()
{
    var trouve,i,nomEtu;
    trouve =false;
    i =0;
    nomEtu = document.getElementById("txtNom").value;

    while((trouve == false) && (i <= 3))
    {
        if(tabJoueur[i] ==  nomEtu)
        {
            trouve = true;
        }
        else
        {
            i++;
        }

    }
    if(trouve == true)
    {
        document.getElementById("lblReponse").innerHTML ="Voici le joueur demande " + nomEtu + " ainsi que son pointage : " + tabPoint[i];
    }
    else
    {
        document.getElementById("lblReponse").innerHTML = "Vous navez pas trouver le nom demande";
    }

}
