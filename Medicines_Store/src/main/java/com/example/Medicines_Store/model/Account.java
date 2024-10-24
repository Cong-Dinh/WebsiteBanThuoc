package com.example.Medicines_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AccountID")
    private Integer accountId;

    @Column(name = "Username", unique = true, nullable = false)
    private String username;

    @Column(name = "Password", nullable = false)
    private String password;

    @Column(name = "CustomerID")
    private Integer customerId;

    @Column(name = "RoleID", nullable = false)
    private Integer roleId;

    // Constructors
    public Account() {}

    public Account(String username, String password, Integer customerId, Integer roleId) {
        this.username = username;
        this.password = password;
        this.customerId = customerId;
        this.roleId = roleId;
    }

    // Getters and Setters
    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Integer getRole() {
        return roleId;
    }

    public void setRole(Integer role) {
        this.roleId = role;
    }

}
