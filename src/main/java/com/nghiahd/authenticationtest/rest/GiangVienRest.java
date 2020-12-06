package com.nghiahd.authenticationtest.rest;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nghiahd.authenticationtest.domain.GiangVien;
import com.nghiahd.authenticationtest.service.GiangVienService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class GiangVienRest {

	@Autowired
	GiangVienService giangVienService;

//
	@GetMapping(value = "/giangvien")
	public ResponseEntity<List<GiangVien>> getAllGiangVien() {
		List<GiangVien> giangvienList = null;
		try {
			giangvienList = giangVienService.getAllGiangVien();
			if (giangvienList == null) {
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(giangvienList, HttpStatus.OK);
	}

	@GetMapping("/giangvienByMaGV")
	public ResponseEntity<List<GiangVien>> getByMaGV(@RequestParam("MaGV") String MaGV) {
		List<GiangVien> giangvien = null;
		try {
			giangvien = giangVienService.getGiangVienByMaNV(MaGV);
			if (giangvien == null) {
				return new ResponseEntity<>(giangvien, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(giangvien, HttpStatus.OK);
	}

	@GetMapping("/giangvien/{id}")
	public ResponseEntity<GiangVien> getGiangVienById(@PathVariable UUID id) {
		Optional<GiangVien> giangvien = null;
		try {
			giangvien = giangVienService.getGiangVientById(id);

			if (giangvien.isPresent()) {
				return new ResponseEntity<>(giangvien.get(), HttpStatus.OK);
			}
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/giangvienByHoTenOrMaGV")
	public ResponseEntity<List<GiangVien>> getByHoTenOrMaGV(@RequestParam(required = true) String keyword) {
		List<GiangVien> giangvien = null;
		try {
			giangvien = giangVienService.getGiangVienByHoTenOrMaGV(keyword);
			if (giangvien == null) {
				return new ResponseEntity<>(giangvien, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(giangvien, HttpStatus.OK);
	}

	@PostMapping(value = "/giangvien")
	public ResponseEntity<GiangVien> saveGiangVien(@RequestBody GiangVien giangvien) {
		GiangVien giangvienNew = null;
		try {
			giangvienNew = giangVienService.saveGiangVien(giangvien);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(giangvienNew, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(giangvienNew, HttpStatus.CREATED);
	}

	@DeleteMapping("/giangvien/{id}")
	public ResponseEntity<?> deleteGiangVien(@PathVariable("id") UUID id) {
		try {
			giangVienService.deleteGiangVien(id);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
