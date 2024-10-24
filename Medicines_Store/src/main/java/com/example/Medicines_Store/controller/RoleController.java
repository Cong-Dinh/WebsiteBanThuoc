package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Role;
import com.example.Medicines_Store.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/getAll")
    public List<Role> getAllRole(){
        return roleService.findAll();
    }

    @GetMapping("/getRole/{roleId}")
    public ResponseEntity<Role> getRoleById(@PathVariable Integer roleId){
        Optional<Role> role = roleService.findById(roleId);
        return role.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Role createRole(@RequestBody Role role){
        return roleService.save(role);
    }

    @PutMapping("/update/{roleId}")
    public ResponseEntity<Role> updateRole(@PathVariable Integer roleId, @RequestBody Role role){
        if(roleService.findById(roleId).isPresent()){
            role.setRoleID(roleId);
            return ResponseEntity.ok(roleService.save(role));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{roleId}")
    public ResponseEntity<Void> deleteRole(@PathVariable Integer roleId){
        if(roleService.findById(roleId).isPresent()){
            roleService.deleteById(roleId);
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
