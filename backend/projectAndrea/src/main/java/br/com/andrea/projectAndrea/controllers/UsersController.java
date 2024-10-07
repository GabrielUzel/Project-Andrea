package br.com.andrea.projectAndrea.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.andrea.projectAndrea.services.UserService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/auth")
public class UsersController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ResponseEntity<Void> getlogin() {
        return ResponseEntity.ok().build();
    }
}
