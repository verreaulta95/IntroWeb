function btnCalculer_onclick()
{ 
 	var argentCan,TauxChangeEuro,Euro; //variable

    argentCan = parseFloat(document.getElementById("txtArgentCan").value); //saisie argent canadien
    TauxChangeEuro = parseFloat(document.getElementById("txtChange").value); //saisie taux de change en euro

    Euro = (argentCan * TauxChangeEuro);  // Traitement

    console.log("Voici votre conversion en Euro : " + Euro) //affichage

}