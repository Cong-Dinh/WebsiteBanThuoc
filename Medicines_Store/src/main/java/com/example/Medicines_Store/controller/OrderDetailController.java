package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.OrderDetail;
import com.example.Medicines_Store.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/getAll")
    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailService.findAll();
    }

    @GetMapping("/getOrderDetail/{orderDetailId}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable Integer orderDetailId) {
        Optional<OrderDetail> orderDetail = orderDetailService.findById(orderDetailId);
        return orderDetail.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public OrderDetail createOrderDetail(@RequestBody OrderDetail orderDetail) {
        return orderDetailService.save(orderDetail);
    }

    @PutMapping("/update/{orderDetailId}")
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable Integer orderDetailId, @RequestBody OrderDetail orderDetail) {
        if (orderDetailService.findById(orderDetailId).isPresent()) {
            orderDetail.setOrderDetailId(orderDetailId);
            return ResponseEntity.ok(orderDetailService.save(orderDetail));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{orderDetailId}")
    public ResponseEntity<Void> deleteOrderDetail(@PathVariable Integer orderDetailId) {
        if (orderDetailService.findById(orderDetailId).isPresent()) {
            orderDetailService.deleteById(orderDetailId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
