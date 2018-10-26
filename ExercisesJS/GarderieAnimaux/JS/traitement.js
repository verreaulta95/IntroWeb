function btnCalculer_onclick()
{ 
 	var NbJour,Service,Veterinaire,Message,Taxes,Tarif,Montant,Animal,With;

    NbJour = parseFloat(document.getElementById("txtNbreJours").value);
    Veterinaire = document.getElementById("lstVeterinaire").value;


    if (document.getElementById("chkServ").checked == true) //Service
    {
        Service = 5;
        With = "avec toilettage ";
    }
    else
    {
        Service = 0;
        With=" sans toilettage ";
    }
    if (document.getElementById("radChien").checked== true)  //Animaux et tarifs
    {
        Tarif = 18.5;
        Animal = " chien ";
    }
    else
    {
        Tarif = 16.95;
        Animal = " Chat ";
    }
    Montant = (NbJour*Tarif)+Service;
    Taxes =   (Montant*0.05) + (Montant*0.09975);
    Montant=Montant+Taxes;
    console.log("Votre veternaire responsable est " + Veterinaire + ". Le montant pour la garde de votre  " + Animal + "pour " + NbJour + " jours " + With +" vous fera : " + Montant);



}