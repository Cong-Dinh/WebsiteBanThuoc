package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Medicine;
import com.example.Medicines_Store.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicines")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class MedicineController {

    @Autowired
    MedicineService medicineService;

    @GetMapping("/getAll")
    public List<Medicine> getAllMedicines() {
        return medicineService.findAll();
    }

    @GetMapping("/getMedicine/{medicineId}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Integer medicineId) {
        Optional<Medicine> medicine = medicineService.findById(medicineId);
        return medicine.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Medicine createMedicine(@RequestBody Medicine medicine) {
        return medicineService.save(medicine);
    }

    @PutMapping("/update/{medicineId}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Integer medicineId, @RequestBody Medicine medicine) {
        if (medicineService.findById(medicineId).isPresent()) {
            medicine.setMedicineId(medicineId);
            return ResponseEntity.ok(medicineService.save(medicine));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{medicineId}")
    public ResponseEntity<Void> deleteMedicine(@PathVariable Integer medicineId) {
        if (medicineService.findById(medicineId).isPresent()) {
            medicineService.deleteById(medicineId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }

    }
}
