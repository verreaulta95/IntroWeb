function btnCalculer_onclick()
{ 
 	var MoyKmMois,TotKM; //declaration variable

	MoyKmMois = parseFloat(document.getElementById("txtMoyKm").value); //saisie moyenne km par mois
	TotKM = (MoyKmMois*60)  //traitement
    console.log("Voici combien de Km vous allez parcourir pour les 5 prochaines années : " + TotKM) //affichage

}