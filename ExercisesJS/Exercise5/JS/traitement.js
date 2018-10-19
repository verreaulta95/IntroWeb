function btnCalculer_onclick()
{ 
 	var home,revenu,food,deplacement,reste; //variable

 	home = parseFloat(document.getElementById("txthome").value);
 	food = parseFloat(document.getElementById("txtfood").value);
 	deplacement = parseFloat(document.getElementById("txtmove").value);
 	revenu = parseFloat(document.getElementById("txtsalaire").value);

 	reste= (revenu-home-food-deplacement)*(12/52); //traitement

    console.log("Voici ce qui vous restera à la fin de la semaine : " +  reste) //affichage
}