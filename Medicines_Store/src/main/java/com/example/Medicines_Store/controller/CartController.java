package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Cart;
import com.example.Medicines_Store.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carts")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/getAll")
    public List<Cart> getAllCarts() {
        return cartService.findAll();
    }

    @GetMapping("/getCart/{cartId}")
    public ResponseEntity<Cart> getCartById(@PathVariable Integer cartId) {
        Optional<Cart> cart = cartService.findById(cartId);
        return cart.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Cart createCart(@RequestBody Cart cart) {
        return cartService.save(cart);
    }

    @PutMapping("update/{cardId}")
    public ResponseEntity<Cart> updateCart(@PathVariable Integer cardId, @RequestBody Cart cart) {
        if (cartService.findById(cardId).isPresent()) {
            cart.setCartId(cardId);
            return ResponseEntity.ok(cartService.save(cart));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{cardId}")
    public ResponseEntity<Void> deleteCart(@PathVariable Integer cardId) {
        if (cartService.findById(cardId).isPresent()) {
            cartService.deleteById(cardId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
