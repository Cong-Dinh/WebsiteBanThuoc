package com.example.Medicines_Store.controller;

import com.example.Medicines_Store.model.Status;
import com.example.Medicines_Store.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/status")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class StatusController {

    @Autowired
    private StatusService statusService;

    @GetMapping("/getAll")
    public List<Status> getAllStatus(){
        return statusService.findAll();
    }

    @GetMapping("/getStatus/{statusID}")
    public ResponseEntity<Status> getStatusById(@PathVariable Integer statusID){
        Optional<Status> status = statusService.findById(statusID);
        return status.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Status createStatus(@RequestBody Status status){
       return statusService.save(status);
    }

    @PutMapping("/update/{statusID}")
    public ResponseEntity<Status> updateStatus(@PathVariable Integer statusID, @RequestBody Status status){
        if (statusService.findById(statusID).isPresent()){
            status.setStatusID(statusID);
            return ResponseEntity.ok(statusService.save(status));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{statusID}")
    public ResponseEntity<Void> deleteStatus(@PathVariable Integer statusID){
        if (statusService.findById(statusID).isPresent()){
            statusService.deleteById(statusID);
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

}
