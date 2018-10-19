function btnCalculer_onclick()
{ 
 	var billet1,billet5,billet10,billet25,total; //variable

 	billet1 = parseFloat(document.getElementById("txtBillet1").value);  //saisie
 	billet5 = parseFloat(document.getElementById("txtBillet5").value);
 	billet10 = parseFloat(document.getElementById("txtBillet10").value);
 	billet25 = parseFloat(document.getElementById("txtBillet25").value);

 	total = (billet1*0.01)+(billet5*0.05)+(billet10*0.1)+(billet25*0.25)  //traitement

    console.log("Voici combien vous économisez en Canadien tire : " + total)  //affichage

}