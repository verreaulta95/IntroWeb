function btnCalculer_onclick()
{ 
 	var Nb1,Nb2,Operateur,Resultat;

 	Nb1 = parseFloat(document.getElementById("txtNbre1").value);
    Nb2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = (document.getElementById("txtOperateur").value);

    switch(Operateur)
    {
        case "+" :
            Resultat = Nb1 + Nb2;
            break;
        case "-" :
            Resultat = Nb1 - Nb2;
            break;
        case "*" :
            Resultat = Nb1 * Nb2;
            break;
        case "/":
            Resultat = Nb1/Nb2;
            break;
    }
    document.getElementById("lblMessage").innerHTML = "Voici votre resultat : " + Resultat;
}