function btnCalculer_onclick()
{
    if(valideChampOblig() === true)
    {
        traiterInfos();
    }
}
function calculer(Nb1,Nb2,Operateur)
{
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

    return Resultat;

}

function traiterInfos()
{
    var Nb1,Nb2,Operateur,Resultat;

    Nb1 = parseFloat(document.getElementById("txtNbre1").value);
    Nb2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = (document.getElementById("txtOperateur").value);
    Resultat = calculer(Nb1,Nb2,Operateur);
    document.getElementById("lblMessage").innerHTML = "Voici votre resultat : " + Resultat;
}

function valideChampOblig()
{
    var valide,tabNomId;
    tabNomId = new Array("txtNbre1","txtNbre2","txtOperateur")
    valide = false;

    for(var i =0; i < tabNomId.length; i++)
    {
        if(validExist("txtNbre1") === true)
        {
            valide = true;
        }
        else if(validExist("txtNbre2") === true)
        {
            valide = true;
        }
        else if (validExist("txtOperateur") === true;)
        {
            valide = true;
        }
    }

    return valide;
}

function validExist(nomId)
{
    var validation;
    validation = false;

    if(document.getElementById(nomId).value === "" )
    {
        document.getElementById(nomId).style.backgroundColor="red";
        validation = false;
    }
    else
    {
        document.getElementById(nomId).style.backgroundColor="white";
        validation = true;
    }

    return validation;
}