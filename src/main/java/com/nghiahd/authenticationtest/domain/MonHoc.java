package com.nghiahd.authenticationtest.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "monhoc")
public class MonHoc {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "mamonhoc")
    private String maMonHoc;

    @Column(name = "tenmonhoc")
    private String tenMonHoc;

    @Column(name = "sotinchi")
    private Integer soTinChi;

    @Column(name = "sotietgiangday")
    private Integer soTietGiangDay;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getMaMonHoc() {
        return maMonHoc;
    }

    public void setMaMonHoc(String maMonHoc) {
        this.maMonHoc = maMonHoc;
    }

    public String getTenMonHoc() {
        return tenMonHoc;
    }

    public void setTenMonHoc(String tenMonHoc) {
        this.tenMonHoc = tenMonHoc;
    }

    public Integer getSoTinChi() {
        return soTinChi;
    }

    public void setSoTinChi(Integer soTinChi) {
        this.soTinChi = soTinChi;
    }

    public Integer getSoTietGiangDay() {
        return soTietGiangDay;
    }

    public void setSoTietGiangDay(Integer soTietGiangDay) {
        this.soTietGiangDay = soTietGiangDay;
    }
}
