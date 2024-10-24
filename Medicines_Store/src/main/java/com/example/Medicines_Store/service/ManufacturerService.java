package com.example.Medicines_Store.service;

import com.example.Medicines_Store.model.Manufacturer;
import com.example.Medicines_Store.repository.ManufacturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManufacturerService {

    @Autowired
    private ManufacturerRepository manufacturerRepository;

    public List<Manufacturer> findAll(){
        return manufacturerRepository.findAll();
    }

    public Optional<Manufacturer> findById(Integer id){
        return manufacturerRepository.findById(id);
    }

    public Manufacturer save(Manufacturer manufacturer){
        return manufacturerRepository.save(manufacturer);
    }

    public void deleteById(Integer id){
        manufacturerRepository.deleteById(id);
    }
}
