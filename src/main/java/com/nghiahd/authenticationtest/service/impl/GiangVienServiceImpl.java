package com.nghiahd.authenticationtest.service.impl;

import com.nghiahd.authenticationtest.domain.GiangVien;
import com.nghiahd.authenticationtest.repository.GiangVienRepository;
import com.nghiahd.authenticationtest.service.GiangVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class GiangVienServiceImpl implements GiangVienService {
	@Autowired
	GiangVienRepository giangVienRepository;

	@Override
	public List<GiangVien> getAllGiangVien() {
		return giangVienRepository.findAll();
	}

	@Override
	public List<GiangVien> getGiangVienByMaNV(String maNV) {
		return giangVienRepository.findByMaGV(maNV);
	}

	@Override
	public List<GiangVien> getGiangVienByHoTenOrMaGV(String keyword) {
		return giangVienRepository.findByHoTenOrMaGV(keyword);
	}

	@Override
	public GiangVien saveGiangVien(GiangVien giangvien) {
		return giangVienRepository.save(giangvien);
	}

	@Override
	public Optional<GiangVien> getGiangVientById(UUID id) {
		return giangVienRepository.findById(id);
	}

	@Override
	public void deleteGiangVien(UUID id) {
		 giangVienRepository.deleteById(id);
	}

}
