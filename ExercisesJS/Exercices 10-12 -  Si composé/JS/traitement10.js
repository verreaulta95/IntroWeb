function btnCalculer_onclick()
{ 
 	var Age,Categorie, Message;

 	Age = parseFloat(document.getElementById("txtAge").value);
 	Message = (document.getElementById("lblMessage").value);

 	if ((Age >= 6) && (Age <=8))
    {
        Categorie ="Poussin";
    }
    else
    {
        if((Age >=9) && (Age <= 10))
        {
            Categorie = "Pupille";
        }
        else
        {
            if((Age >= 11) && (Age <= 12))
            {
                Categorie = "Minime";
            }
            else
            {
                Categorie = "Cadet";
            }
        }
    }
    Message = Categorie;
 	console.log("Voici votre categorie dage : " + Categorie);

}