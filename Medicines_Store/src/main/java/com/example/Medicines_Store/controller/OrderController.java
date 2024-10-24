package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Order;
import com.example.Medicines_Store.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class OrderController {

    @Autowired
    private OrderService orderService;


    @GetMapping("/getAll")
    public List<Order> getAllOrders() {
        return orderService.findAll();
    }

    @GetMapping("/getOrder/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer orderId) {
        Optional<Order> order = orderService.findById(orderId);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Order createOrder(@RequestBody Order order) {
        return orderService.save(order);
    }

    @PutMapping("/update/{orderId}")
    public ResponseEntity<Order> updateOrder(@PathVariable Integer orderId, @RequestBody Order order) {
        if (orderService.findById(orderId).isPresent()) {
            order.setOrderId(orderId);
            return ResponseEntity.ok(orderService.save(order));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{orderId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Integer orderId) {
        if (orderService.findById(orderId).isPresent()) {
            orderService.deleteById(orderId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
