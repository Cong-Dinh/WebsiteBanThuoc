package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Manufacturer;
import com.example.Medicines_Store.service.ManufacturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/manufacturers")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class ManufacturerController {

    @Autowired
    ManufacturerService manufacturerService;

    @GetMapping("/getAll")
    public List<Manufacturer> getAllManufacturers() {
        return manufacturerService.findAll();
    }

    @GetMapping("/getManufacturer/{manufacturerId}")
    public ResponseEntity<Manufacturer> getManufacturerById(@PathVariable Integer manufacturerId) {
        Optional<Manufacturer> manufacturer = manufacturerService.findById(manufacturerId);
        return manufacturer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Manufacturer createManufacturer(@RequestBody Manufacturer manufacturer) {
        return manufacturerService.save(manufacturer);
    }

    @PutMapping("/update/{manufacturerId}")
    public ResponseEntity<Manufacturer> updateManufacturer(@PathVariable Integer manufacturerId, @RequestBody Manufacturer manufacturer) {
        if (manufacturerService.findById(manufacturerId).isPresent()) {
            manufacturer.setManufacturerId(manufacturerId);
            return ResponseEntity.ok(manufacturerService.save(manufacturer));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{manufacturerId}")
    public ResponseEntity<Void> deleteManufacturer(@PathVariable Integer manufacturerId) {
        if (manufacturerService.findById(manufacturerId).isPresent()) {
            manufacturerService.deleteById(manufacturerId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
