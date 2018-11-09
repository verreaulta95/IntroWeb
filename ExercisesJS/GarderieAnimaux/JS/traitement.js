var NbJour,Veterinaire,Taxes,Tarif,Animal,With,Jour,Rabais,NbreHeure,Taux,Total,Travail,Service;

function btnCalculer_onclick()
{
    saisirService_onclick(); //fonction non-event
    saisirVeterinaire();
    saisirNbreJour();
    saisirVariable();
    calculerTarif();
    document.getElementById("lblMessage").innerHTML = ("Votre veternaire responsable est " + Veterinaire + ". Le montant pour la garde de votre  " + Animal + "pour " + NbJour + " jours " + With + " vous fera : " + Taxes + " $." );
}

function calculerTarif()
{

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

    Travail = (NbreHeure*Taux); //veteri
    Rabais = (NbJour*Tarif)*Rabais; //montant du rabais
    Total = (NbJour*Tarif-Rabais); //application du rabais
    Taxes = Total + (Total*0.05) + (Total*0.09975) + Travail + Service; //calcul finale + taxes/services/travail
}
function radChien_onclick()
{
    document.getElementById("imgChienChat").src="img/shiba-inu.jpg";
}
function radChat_onclick()
{
    document.getElementById("imgChienChat").src="img/bbChat1.jpg";
}
function saisirService_onclick()
{
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
}
function saisirVeterinaire()
{
    switch(Veterinaire)
    {
        case "Audrey Bouchard":
            Taux = 25;
            break;
        case "Stéphane Tremblay" :
            Taux = 35;
            break;
        case "Maxime Simard" :
            Taux = 40;
            break;
        case "Mélissa Caron" :
            Taux = 45;
            break;
    }
}
function saisirNbreJour()
{
    if (Jour <= 5)   // rabais selon le nombre de jours rester en clinique
    {
        Rabais = 0;
    }
    else
    {
        if(Jour >5 && Jour <10)
        {
            Rabais = 0.05;
        }
        else if(Jour>10 && Jour <=30 )
        {
            Rabais = 0.1;
        }
        else
        {
            Rabais = 0.15;
        }
    }
}
function saisirVariable()
{
    NbJour = parseFloat(document.getElementById("txtNbreJours").value);
    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbreHeure = parseFloat(document.getElementById("txtNbreHeures").value);
}