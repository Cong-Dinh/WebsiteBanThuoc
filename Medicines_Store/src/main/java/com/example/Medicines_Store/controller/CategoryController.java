package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Category;
import com.example.Medicines_Store.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/getAll")
    public List<Category> getAllCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/getCategory/{categoryId}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Integer categoryId) {
        Optional<Category> category = categoryService.findById(categoryId);
        return category.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Category createCategory(@RequestBody Category category) {
        return categoryService.save(category);
    }

    @PutMapping("/update/{categoryId}")
    public ResponseEntity<Category> updateCategoryById(@PathVariable Integer categoryId, @RequestBody Category category) {
        if (categoryService.findById(categoryId).isPresent()) {
            category.setCategoryId(categoryId);
            return ResponseEntity.ok(categoryService.save(category));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{categoryId}")
    public ResponseEntity<Void> deleteCategoryById(@PathVariable Integer categoryId) {
        if (categoryService.findById(categoryId).isPresent()) {
            categoryService.deleteById(categoryId);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
