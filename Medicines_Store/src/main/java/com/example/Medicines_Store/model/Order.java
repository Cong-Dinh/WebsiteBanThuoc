package com.example.Medicines_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderID")
    private Integer orderId;

    @Column(name = "AccountID")
    private Integer accountId;

    @Column(name = "OrderDate", nullable = false)
    private java.sql.Timestamp orderDate;

    @Column(name = "TotalAmount", nullable = false)
    private Double totalAmount;

    @Column(name = "StatusID", nullable = false)
    private Integer statusId;

    // Constructors
    public Order() {}

    public Order(Integer accountId, java.sql.Timestamp orderDate, Double totalAmount, Integer statusId) {
        this.accountId = accountId;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
        this.statusId = statusId;
    }

    // Getters and Setters
    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public java.sql.Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(java.sql.Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Integer getStatusId() {
        return statusId;
    }

    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", accountId=" + accountId +
                ", orderDate=" + orderDate +
                ", totalAmount=" + totalAmount +
                ", status='" + statusId + '\'' +
                '}';
    }
}
