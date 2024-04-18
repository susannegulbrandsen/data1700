function regBillett() {
    if (!validerInput()) {
        return;
    }
    const billett = {
        filmtittel: $("#filmtittel").val(),
        antallbilletter: $("#antallbilletter").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    };


    $.post("/lagre", billett, function(){
        hentAlle();
    });
    $("#filmtittel").val("");//tøm input-feltene
    $("#antallbilletter").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");


}

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(billetter){
    let ut = "<table class=\"table table-hover\"><tr><th>Filmtittel</th><th>Antall billetter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (const billett of billetter){
        ut+="<tr><td>"+billett.filmtittel+"</td><td>"+billett.antallbilletter+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td><td>"+billett.telefonnr+"</td><td>"+billett.epost+"</td></tr>";
    }
    ut+="</table>";
    $("#billettene").html(ut);
}

function slettBillettene() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}

function validerInput() {
    const filmtittel = $("#filmtittel").val();
    const antallbilletter = $("#antallbilletter").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost = $("#epost").val();


    $("#fornavnfail, #etternavnfail, #telefonnrfail, #epostfail").hide();


    if (!filmtittel || !antallbilletter || !fornavn || !etternavn || !telefonnr || !epost) {
        alert("Du må fylle all felt!")
        $("#fornavnfail, #etternavnfail, #telefonnrfail, #epostfail").show();
        return false;
    }


    const navnRegex = /^[a-zA-Z]+$/;
    if (!navnRegex.test(fornavn)) {
        $("#fornavnfail").show();
    } else $("#fornavnfail").hide();

    if (!navnRegex.test(etternavn)) {
        $("#etternavnfail").show();
    } else $("#etternavnfail").hide();


    const telefonnrRegex = /^[0-9]{8}$/;
    if (!telefonnrRegex.test(telefonnr)) {
        $("#telefonnrfail").show();
    } else $("#telefonnrfail").hide();


    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epostRegex.test(epost)) {
        $("#epostfail").show();
        return false;
    } else $("#epostfail").hide();

    return true;
}
