package com.nghiahd.authenticationtest.service;

import com.nghiahd.authenticationtest.domain.GiangVien;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface GiangVienService {
    List<GiangVien> getAllGiangVien();
    List<GiangVien> getGiangVienByMaNV(String maNV);
    List<GiangVien> getGiangVienByHoTenOrMaGV(String keyword);
    GiangVien saveGiangVien(GiangVien giangvien);
    Optional<GiangVien> getGiangVientById(UUID id);
    void deleteGiangVien(UUID id);
}
