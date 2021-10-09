//fonction pour voir le mot de passe ou le cacher avec l'image de l'oeil

f=true;
function changer(){
    if(f){
        document.getElementById("mdp").setAttribute("type","text");
        document.getElementById("oeil").src="icon/visibility.png";
        f=false
    }
    else{
        document.getElementById("mdp").setAttribute("type","password");
        document.getElementById("oeil").src="icon/invisibility.png";
        f=true
    }
}

function changerVerif(){
    if(f){
        document.getElementById("verifMdp").setAttribute("type","text");
        document.getElementById("oeilVerif").src="icon/visibility.png";
        f=false
    }
    else{
        document.getElementById("verifMdp").setAttribute("type","password");
        document.getElementById("oeilVerif").src="icon/invisibility.png";
        f=true
    }
}

// fonction de verification du formulaire




function verifier() {

    var form_connect = document.getElementById("connexion").value;
    var nom = document.getElementById("nom").value;
    var mail = document.getElementById("mail").value;
    var motDePass = document.getElementById("mdp").value;
    var verifMotDePass = document.getElementById("verifMdp").value;
    var box = document.getElementById("check").checked;

    if( (nom !== "") && (mail !== "") && (motDePass !== "") && (verifMotDePass !== "") && (box) ){
        console.log('nom valide !!');
        let position = mail - 10;
        let positionOut = mail - 12
        let verifYmail = mail.indexOf('@ymail.com', position);
        let verifGmail = mail.indexOf('@gmail.com', position);
        let verifYahoo = mail.indexOf('@yahoo.com', position);
        let verifHotmail = mail.indexOf('@hotmail.com', positionOut);

        if((verifYmail > 0)  ||  (verifGmail > 0)  ||  (verifYahoo > 0)  ||  (verifHotmail > 0)){
            console.log('mail valide');

            if((motDePass === verifMotDePass)  &&  (motDePass.length >= 4) ){
                alert('Vos données ont été transmis avec sucess');
            }
            else{
                alert('mauvais mot de passe');
            }
        }
        else{
            alert('votre email n\'est pas au bon format');
        }
    }
    else{
        alert('Remplissez tous champs svp !!');
    }
}