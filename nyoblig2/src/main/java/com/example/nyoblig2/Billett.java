package com.example.nyoblig2;

public class Billett {
    private String filmtittel;
    private String antallbilletter;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;



    public Billett(String filmtittel, String antallbilletter, String fornavn, String etternavn, String telefonnr, String epost) {
        this.filmtittel=filmtittel;
        this.antallbilletter=antallbilletter;
        this.fornavn=fornavn;
        this.etternavn=etternavn;
        this.telefonnr=telefonnr;
        this.epost=epost;
    }

    public Billett() { }

    public String getFilmtittel() {
        return filmtittel;
    }

    public void setFilmtittel(String filmtittel) {
        this.filmtittel = filmtittel;
    }

    public String getAntallbilletter() {
        return antallbilletter;
    }

    public void setAntallbilletter(String antallbilletter) {
        this.antallbilletter = antallbilletter;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }


}