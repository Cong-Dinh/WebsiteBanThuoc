package com.example.Medicines_Store.service;

import com.example.Medicines_Store.model.Customer;
import com.example.Medicines_Store.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> findAll(){
        return customerRepository.findAll();
    }

    public Optional<Customer> findById(Integer id){
        return customerRepository.findById(id);
    }

    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }

    public void deleteById(Integer id){
        customerRepository.deleteById(id);
    }
}