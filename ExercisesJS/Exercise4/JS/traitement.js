function btnCalculer_onclick()
{ 
 	var distance,consoVoiture,prixLitre,cout,destination; // variable

    destination = document.getElementById("txtDestination").value;
    distance = parseFloat(document.getElementById("txtDistance").value);  // saisie
    consoVoiture = parseFloat(document.getElementById("txtconsoVoiture").value);
    prixLitre = parseFloat(document.getElementById("txtprixLitre").value);
    destination=(distance=50),(consoVoiture=8),(prixLitre=1.349)

    cout= (distance*consoVoiture)/100 *prixLitre;  //traitement

    console.log("Voici votre montant à débourser pour le trajet  : " + cout)  //affichage

}