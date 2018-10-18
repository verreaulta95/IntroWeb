function btnCalculer_onclick()
{ 
 	var PoidsLivres,Kg;  //declaration variable

    PoidsLivres = parseFloat(document.getElementById("txtLivre").value);  //saisir livres
    kg = (PoidsLivres / 2.2)
    console.log("Voici votre poid en Lbs converti en Kilo "+ kg);


}