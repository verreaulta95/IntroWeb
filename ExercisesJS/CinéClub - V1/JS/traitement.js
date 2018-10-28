function btnCalculer_onclick()
{
    var prix,age,representation,reduction,midi,message,montant,taxe;  //variable

    prix = parseFloat(document.getElementById("txtBasePrix").value);
    age = document.getElementById("txtAge").value;
    message = document.getElementById("lblMessage").value;
    representation = document.getElementById("radMidi","radSoir").value;

    if(document.getElementById("radMidi").checked == true)
    {
        if(age <= 16)
        {
            reduction=.60;
            representation = "midi";
        }
        else
        {
            reduction =.30;
            representation = "midi";
        }
    }
    if (document.getElementById("radSoir").checked ==  true)
    {
        if(age > 17)
        {
            reduction = .40;
            representation = "soir";
        }
        else
        {
            reduction =0;
            representation = "soir";
        }
    }
    reduction = prix*reduction;
    montant = prix - reduction;
    message = montant;
    console.log("Voici le montant a debourser pour votre cinema pour le "+ representation +" vous fera : " + montant + "$");

}