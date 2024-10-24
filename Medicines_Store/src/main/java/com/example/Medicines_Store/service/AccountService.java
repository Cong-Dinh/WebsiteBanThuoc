package com.example.Medicines_Store.service;

import com.example.Medicines_Store.model.Account;
import com.example.Medicines_Store.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public List<Account> findAll(){
        return accountRepository.findAll();
    }

    public Optional<Account> findById(Integer id){
        return accountRepository.findById(id);
    }

    public Account save(Account account){
        return accountRepository.save(account);
    }

    public void deleteById(Integer id){
        accountRepository.deleteById(id);
    }
}
