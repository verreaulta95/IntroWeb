function btnCalculer_onclick()
{
    var Jour,Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi;

    Jour = (document.getElementById("txtNumSem").value);
    Lundi = (document.getElementById("txtNumSem").value);
    Mardi = (document.getElementById("txtNumSem").value);
    Mercredi = (document.getElementById("txtNumSem").value);
    Jeudi = (document.getElementById("txtNumSem").value);
    Vendredi = (document.getElementById("txtNumSem").value);
    Samedi = (document.getElementById("txtNumSem").value);
    Dimanche = (document.getElementById("txtNumSem").value);

   switch ((document.getElementById("txtNumSem").value))
   {
       case 1:
           Jour = "Lundi";
           break;
       case 2:
           Jour = "Mardi";
           break;
       case 3:
           Jour = "Mercredi";
       case 4:
           Jour = "Jeudi";
           break;
       case 5:
           Jour = "Vendredi";
           break;
       case 6:
           Jour = "Samedi";
           break;
       case 7:
           Jour = "Dimanche";
           break;
   }

    console.log("Voici le jour de la semaine : " + Jour);

}