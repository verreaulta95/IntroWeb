function btnCalculer_onclick()
{
    var Enfant,Etudiant,Adulte,Senior,Billet,Total,Taxes,Reduction;  //variable

    Enfant = parseFloat(document.getElementById("txtEnfant").value);  //saisie
    Etudiant = parseFloat(document.getElementById("txtEtudiant").value);
    Adulte = parseFloat(document.getElementById("txtAdulte").value);
    Senior = parseFloat(document.getElementById("txtSenior").value);
    Billet = parseFloat(document.getElementById("txtBillet").value);
    Taxes =  ((Etudiant*12)+(Adulte*20)+(Senior*15))*0.14975;

    if(Billet > 5)
    {
        Reduction = ((Etudiant*12)+(Adulte*20)+(Senior*15))*0.1;
    }
    else
    {
        Reduction = 0;
    }

    Total = ((Etudiant*12) + (Adulte*20) + (Senior*15) - Reduction)+ Taxes;
    console.log("Voici votre montant a payer : "+ Total )
}