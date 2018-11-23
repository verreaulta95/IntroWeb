
function calculer(Nb1,Nb2,Operateur)
{
    var Resultat =0;
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


function validExist(nomId)
{
    var valide;
    valide = true;

    if(document.getElementById(nomId).value === "" )
    {
        valide = false;
        document.getElementById(nomId).style.backgroundColor="red";
    }
    else
    {
        valide = true;
        document.getElementById(nomId).style.backgroundColor="white";
    }

    return valide;
}

function valideChampOblig()
{
    var valide,tabNomId;
    tabNomId = new Array("txtNbre1","txtNbre2","txtOperateur")
    valide = true;

    for(var i =0; i < tabNomId.length; i++)
    {
        if( validExist(tabNomId[i]) === false)
        {
            valide = false;
        }
    }

    return valide;
}

function btnCalculer_onclick()
{
    if(valideChampOblig() === true)
    {
         if(valideFormats() === true)
            {
                traiterInfos();
            }
    }
}
function valideFormats()
{
    var valide = true;

    if(valideNo(document.getElementById("txtNbre1").value) === false)
    {
        valide = false;
        document.getElementById("txtNbre1").style.backgroundColor="red";
    }
    else
    {
        document.getElementById("txtNbre1").style.backgroundColor="white";
    }


    if(valideNo(document.getElementById("txtNbre2").value) === false)
    {
        valide = false;
        document.getElementById("txtNbre2").style.backgroundColor="red";
    }
    else
    {
        document.getElementById("txtNbre2").style.backgroundColor="white";
    }


    if(valideOperateur(document.getElementById("txtOperateur").value) === false)
    {
        valide = false;
        document.getElementById("txtOperateur").style.backgroundColor="red";
    }
    else
    {
        document.getElementById("txtOperateur").style.backgroundColor="white";
    }


    return valide;
}

function valideNo(chaine)
{
    return /^[0-9]+$/.test(chaine)
}

function valideOperateur(chaine)
{
    return /^(\+|\-|\/|\*)?/.test(chaine)
}