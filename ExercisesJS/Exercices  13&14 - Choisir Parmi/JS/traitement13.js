function btnCalculer_onclick()
{
    var NoJour;

    NoJour = parseFloat(document.getElementById("txtNumSem").value);

   switch (NoJour)
   {
       case 1:
           NoJour = "Lundi";
           break;
       case 2:
           NoJour = "Mardi";
           break;
       case 3:
           NoJour = "Mercredi";
       case 4:
           NoJour = "Jeudi";
           break;
       case 5:
           NoJour = "Vendredi";
           break;
       case 6:
           NoJour = "Samedi";
           break;
       case 7:
           NoJour = "Dimanche";
           break;
   }

    document.getElementById("lblMessage").innerHTML = ("Voici le jour de la semaine : " + NoJour);

}