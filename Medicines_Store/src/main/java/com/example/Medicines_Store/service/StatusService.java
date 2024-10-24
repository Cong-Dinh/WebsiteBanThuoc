package com.example.Medicines_Store.service;

import com.example.Medicines_Store.model.Status;
import com.example.Medicines_Store.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StatusService {

    @Autowired
    private StatusRepository statusRepository;

    public List<Status> findAll() {
        return statusRepository.findAll();
    }

    public Optional<Status> findById(Integer id) {
        return statusRepository.findById(id);
    }
    public Status save(Status status) {
        return statusRepository.save(status);
    }
    public void deleteById(Integer id) {
        statusRepository.deleteById(id);
    }
}
