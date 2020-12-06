package com.nghiahd.authenticationtest.repository;

import com.nghiahd.authenticationtest.domain.GiangVien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface GiangVienRepository extends JpaRepository<GiangVien, UUID>, GiangVienRepositoryCustom {
	List<GiangVien> findByMaGV(String maGV);
	@Query("Select g from GiangVien g where g.hoTen = ?1 OR g.maGV = ?1 ")
	List<GiangVien> findByHoTenOrMaGV(String keyword);
	
}
