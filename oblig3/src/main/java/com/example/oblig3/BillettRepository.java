package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db;
    public void lagreBillett(Billett innBillett){
        String sql = "INSERT INTO Billett (filmtittel,antallbilletter, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilmtittel(),
                innBillett.getAntallbilletter(),
                innBillett.getFornavn(),
                innBillett.getEtternavn(),
                innBillett.getTelefonnr(),
                innBillett.getEpost());
    }
    public List<Billett> hentAlle(){
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return alleBilletter;

    }
    public void slettAlle(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
