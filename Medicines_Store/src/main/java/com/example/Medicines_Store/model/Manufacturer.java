package com.example.Medicines_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "manufacturers")
public class Manufacturer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ManufacturerID")
    private Integer manufacturerId;

    @Column(name = "ManufacturerName", nullable = false)
    private String manufacturerName;

    @Column(name = "ContactInfo")
    private String contactInfo;

    // Constructors
    public Manufacturer() {}

    public Manufacturer(String manufacturerName, String contactInfo) {
        this.manufacturerName = manufacturerName;
        this.contactInfo = contactInfo;
    }

    // Getters and Setters
    public Integer getManufacturerId() {
        return manufacturerId;
    }

    public void setManufacturerId(Integer manufacturerId) {
        this.manufacturerId = manufacturerId;
    }

    public String getManufacturerName() {
        return manufacturerName;
    }

    public void setManufacturerName(String manufacturerName) {
        this.manufacturerName = manufacturerName;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

}
