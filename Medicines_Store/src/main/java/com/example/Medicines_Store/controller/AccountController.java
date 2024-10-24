package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Account;
import com.example.Medicines_Store.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/getAll")
    public List<Account> getAllAccounts() {
        return accountService.findAll();
    }

    @GetMapping("/getAccount/{accountId}")
    public ResponseEntity<Account> getAccountById(@PathVariable Integer accountId) {
        Optional<Account> account = accountService.findById(accountId);
        return account.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Account createAccount(@RequestBody Account account) {
        return accountService.save(account);
    }

    @PutMapping("/update/{accountId}")
    public ResponseEntity<Account> updateAccount(@PathVariable Integer accountId, @RequestBody Account account) {
        if (accountService.findById(accountId).isPresent()) {
            account.setAccountId(accountId);
            return ResponseEntity.ok(accountService.save(account));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{accountId}")
    public ResponseEntity<Void> deleteAccount(@PathVariable Integer accountId) {
        if (accountService.findById(accountId).isPresent()) {
            accountService.deleteById(accountId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
