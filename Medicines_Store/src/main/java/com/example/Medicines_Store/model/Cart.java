package com.example.Medicines_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CartID")
    private Integer cartId;

    @Column(name = "AccountID")
    private Integer accountId;

    @Column(name = "MedicineID")
    private Integer medicineId;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;

    // Constructors
    public Cart() {}

    public Cart(Integer accountId, Integer medicineId, Integer quantity) {
        this.accountId = accountId;
        this.medicineId = medicineId;
        this.quantity = quantity;
    }

    // Getters and Setters
    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public Integer getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Integer medicineId) {
        this.medicineId = medicineId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
