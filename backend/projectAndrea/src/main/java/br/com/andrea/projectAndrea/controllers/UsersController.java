package br.com.andrea.projectAndrea.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.Valid;
import br.com.andrea.projectAndrea.auth.TokenService;
import br.com.andrea.projectAndrea.dtos.LoginDTO;
import br.com.andrea.projectAndrea.dtos.LoginResponseDTO;
import br.com.andrea.projectAndrea.dtos.RegisterDTO;
import br.com.andrea.projectAndrea.enums.UserRole;
import br.com.andrea.projectAndrea.models.User;
import br.com.andrea.projectAndrea.repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class UsersController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> postLogin(@RequestBody @Valid LoginDTO data) {
        var emailAndPassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(emailAndPassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity<Void> postRegister(@RequestBody @Valid RegisterDTO data) {
        if(this.userRepository.findByEmail(data.email()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.name(), data.surname(), data.email(), encryptedPassword, data.profilePicturePath(), UserRole.ADMIN);

        this.userRepository.save(newUser);
        return ResponseEntity.ok().build();
    }
}
