package com.example.Medicines_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "medicines")
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MedicineID")
    private Integer medicineId;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "CategoryID")
    private Integer categoryId;

    @Column(name = "ManufacturerID")
    private Integer manufacturerId;

    @Column(name = "Price", nullable = false)
    private Double price;

    @Column(name = "StockQuantity", nullable = false)
    private Integer stockQuantity;

    @Column(name = "Description")
    private String description;

    @Column(name = "ExpirationDate")
    private java.sql.Date expirationDate;


    // Constructors
    public Medicine() {}

    public Medicine(String name, Integer categoryId, Integer manufacturerId,
                    Double price, Integer stockQuantity, String description,
                    java.sql.Date expirationDate) {
        this.name = name;
        this.categoryId = categoryId;
        this.manufacturerId = manufacturerId;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.description = description;
        this.expirationDate = expirationDate;
    }

    // Getters and Setters
    public Integer getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Integer medicineId) {
        this.medicineId = medicineId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getManufacturerId() {
        return manufacturerId;
    }

    public void setManufacturerId(Integer manufacturerId) {
        this.manufacturerId = manufacturerId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public java.sql.Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(java.sql.Date expirationDate) {
        this.expirationDate = expirationDate;
    }

}
