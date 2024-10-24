package com.example.Medicines_Store.service;

import com.example.Medicines_Store.model.Medicine;
import com.example.Medicines_Store.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    public List<Medicine> findAll(){
        return medicineRepository.findAll();
    }

    public Optional<Medicine> findById(Integer id){
        return medicineRepository.findById(id);
    }

    public Medicine save(Medicine medicine){
        return medicineRepository.save(medicine);
    }

    public void deleteById(Integer id){
        medicineRepository.deleteById(id);
    }
}
