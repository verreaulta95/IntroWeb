function btnCalculer_onclick()
{
    var prix,age,representation,reduction,montant,film;  //variable

    prix = parseFloat(document.getElementById("txtBasePrix").value);
    age = document.getElementById("txtAge").value;
    film = document.getElementById("lstOptions").value;
    representation = document.getElementById("radMidi","radSoir").value;

    if (document.getElementById("chkMiSession").checked == true)
    {
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
            if(age >= 16)
            {
                reduction = .40;
                representation = "soir";
            }
            else
            {
                reduction = 0;
                representation = "soir";
            }
        }
    }
    else
    {
        reduction= 0;
    }

    reduction = prix*reduction;
    montant = prix - reduction;
    console.log("Voici le montant a debourser pour " + film +"  pour le "+ representation +" vous fera : " + montant + "$");

}