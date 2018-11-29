function frmMembre_onclick()
{
    if(validChampOblig() === true)
    {
        if(validFormats() === true)
        {
            valide = true;
            coutTarif();
        }
    }

}
function validChampOblig()
{
    var tabChampOblig,valide;
    valide = true;
    tabChampOblig = new Array("txtNom", "txtPrenom", "txtAdresse" , "txtVille", "txtTel");

    for(var i =0; i < tabChampOblig.length; i++)
    {
        if(validExist(tabChampOblig[i]) === false)
        {
            valide = false;
        }
    }

    return valide;
}
function validExist(nomId)
{
        var valide;
        valide = true;

        if(document.getElementById(nomId).value === "")
        {
            valide = false;
            document.getElementById("lblMessageErreur").innerHTML="Veuillez remplir les champs obligatoires.";
        }
        else
        {
            document.getElementById("lblMessageErreur").innerHTML = "";
        }

        return valide;
}



/*
function coutTarif()
{
    var tarif =0;
    switch(type)
    {
        case "adulte" :
            tarif = 90;
            break;
        case "étudiant" :
            tarif = 60;
            break;
        case "retraité" :
            tarif = 80;
            break;
    }

    return tarif;
    document.getElementById("lblMessageTarif").innerHTML = ("Voici le tarif selon votre âge : + " + tarif );
}

*/
function validFormats()
{
    var valide = true;
    var message;
    if(valideCar(document.getElementById("txtNom").value) === false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor ="red";

    }
    else
    {
        document.getElementById("txtNom").style.borderColor ="";
    }

    if(valideCar(document.getElementById("txtPrenom").value) === false)
    {
        valide = false;
        document.getElementById("txtPrenom").style.borderColor="red";
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor="";
    }


    if(valideCar(document.getElementById("txtVille").value) === false)
    {
        valide = false;
        document.getElementById("txtVille").style.borderColor="red";
    }
    else
    {
        document.getElementById("txtVille").style.borderColor="";
    }

    if(valideTel(document.getElementById("txtTel").value) === false)
    {
        valide = false;
        document.getElementById("txtTel").style.borderColor="red";
    }
    else
    {
        document.getElementById("txtTel").style.borderColor="";
    }

    if(validePostal(document.getElementById("txtCodePostal").value) === false)
    {
        document.getElementById("txtCodePostal").style.borderColor="red";
    }

    if(validePerm(document.getElementById("txtCodePerm").value) === false)
    {
        document.getElementById("txtCodePerm").style.borderColor="red";
    }

    return valide;

}



function valideCar(chaine)
{
    return /^([A-z]+)-*([A-z]+)$/.test(chaine);
}

function valideTel(chaine)
{
    return /^\(\d{3}\)-*[0-9]{3}-{1}[0-9]{4}$/.test(chaine);
}

function validePostal(chaine)
{
    return /^[A-z]{1}[0-9]{1}[A-z]-*[0-9]{1}[A-z]{1}[0-9]{1}$/.test(chaine);
}

function validePerm(chaine)
{
    return /^[A-z]{4}[0-9]{8}$/.test(chaine);
}
