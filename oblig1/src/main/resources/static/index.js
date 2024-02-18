

let allebilletter =[]; //Array hvor billettene skal registreres inn

//Funksjon som legger til billetter når man trykker på knappen: "Kjøp billetter"
function leggtil(){
    const filmtittel=document.getElementById("filmtittel").value; //lager variabler av verdiene i inputfeltene
    const antallbilletter=document.getElementById("antallbilletter").value;
    const fornavn=document.getElementById("fornavn").value;
    const etternavn=document.getElementById("etternavn").value;
    const telefonnr=document.getElementById("telefonnr").value;
    const epost=document.getElementById("epost").value;

    //Advarsel popper opp om man ikke fyller inn alle felt
    if(!filmtittel||!antallbilletter||!fornavn||!etternavn||!telefonnr||!epost){
        alert("Du må fylle inn alle feltene!");
        return;
    }

    //Hvis noen av feltene har ugyldig inputverdi
    if(!validatefornavn() || !validateetternavn() || !validatetel() || !validateemail()){
        alert("Alle felt må være gyldig for å kjøpe billetter.")
        return;
    }


    //Lager et billettobjekt
    const billett = {filmtittel,antallbilletter,fornavn,etternavn,telefonnr,epost
    };

    allebilletter.push(billett); //legger inn billett i array

    visbilletter(); //vise billett i tabell
}

//Funksjon som viser registrerte billetter i tabellen
function visbilletter(){
    const billetttabell=document.getElementById("billetttabell");
    const registrertbillett=document.getElementById("registrertbillett");

    registrertbillett.innerHTML=''; //tømmer innholdet for å unngå duplikat når man legger til flere billetter

    //for-løkke for å legge til data i arrayet og inn i tabellen
    for(let i=0; i< allebilletter.length; i++){
        const rad=document.createElement("tr"); //oppretter et rad-variabel hvor alle dataene skal inn i

        const datafilmtittel=document.createElement("td"); //oppretter data-variabler som skal inn i raden
        datafilmtittel.textContent=allebilletter[i].filmtittel; //oppretter tekstinnholdet som skal inn i cellen

        const dataantallbilletter=document.createElement("td");
        dataantallbilletter.textContent=allebilletter[i].antallbilletter;

        const datafornavn=document.createElement("td");
        datafornavn.textContent=allebilletter[i].fornavn;

        const dataetternavn=document.createElement("td");
        dataetternavn.textContent=allebilletter[i].etternavn;

        const datatelefonnr=document.createElement("td");
        datatelefonnr.textContent=allebilletter[i].telefonnr;

        const dataepost=document.createElement("td");
        dataepost.textContent=allebilletter[i].epost;

        //Legger til data i raden
        rad.appendChild(datafilmtittel);
        rad.appendChild(dataantallbilletter);
        rad.appendChild(datafornavn);
        rad.appendChild(dataetternavn);
        rad.appendChild(datatelefonnr);
        rad.appendChild(dataepost);

       //Legger til raden i tabellen
        billetttabell.appendChild(rad);
        registrertbillett.appendChild(rad);

    }
}


//Funksjon som sletter alle billettene på en gang når du trykker på knappen "Slett alle billetter"
function slettbilletter() {
    const bekreftsletting = confirm("Er du sikker på at du ønsker å slette alle billettene?") //Advarsel som man må bekrefte før man sletter alt
    if (bekreftsletting) {
        // Tømmer innholdet
        document.getElementById("registrertbillett").innerHTML = '';
        allebilletter = []; // Nullstill billettarrayen
    }

}


//Funksjoner som skal validere verdien av inputfeltene
function validateemail(){
    const emailinput=document.getElementById("epost"); //lager input-variabel
    const emailvalue=emailinput.value; //lager verdi-variabel av verdien til  input-variabel
    const emailfail=document.getElementById("emailfail"); //variabel for usynlige advarsler

    //if-setning som validerer tegnene og tester det utifra verdi-variabelen
if(!emailvalue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue)){ //kan ikke starte, slutte eller innhold mellomrom eller @(mer enn en gang), må ha punktum på slutten, eks: hei@gmail.com

        emailfail.style.display="inline"; //vis advarsel om det er ugyldig verdi
        return false;
    }
    else{
        emailfail.style.display="none"; //ikke vis advarsel om gyldig verdi
        return true;
    }


}

function validatefornavn(){
    const fornavninput=document.getElementById("fornavn");
    const fornavnvalue=fornavninput.value;
    const fornavnfail=document.getElementById("fornavnfail");


    if(!fornavnvalue || !/^[A-Za-z\s]+$/.test(fornavnvalue)){ //kun alfabetiske tegn
        fornavnfail.style.display="inline";
        return false;
    }
    else {
        fornavnfail.style.display="none";
        return true;
    }



}
function validateetternavn(){
    const etternavninput=document.getElementById("etternavn");
    const etternavnvalue=etternavninput.value;
    const etternavnfail=document.getElementById("etternavnfail");

    if(!etternavnvalue || !/^[A-Za-z\s]+$/.test(etternavnvalue)){
        etternavnfail.style.display="inline";
        return false;
    }
    else {
        etternavnfail.style.display="none";
        return true;
    }
}
function validatetel(){
    const telinput=document.getElementById("telefonnr");
    const telvalue=telinput.value;
    const telfail=document.getElementById("telfail");

    if(!telvalue || !/^\d{8}$/.test(telvalue)){ //kun 8 nummer fra 0-9
        telfail.style.display="inline";
        return false;
    }
    else{
        telfail.style.display="none";
        return true;
    }

}