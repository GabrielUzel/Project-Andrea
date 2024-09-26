package br.com.andrea.projectAndrea.services;

import org.springframework.stereotype.Service;
import br.com.andrea.projectAndrea.models.User;
import br.com.andrea.projectAndrea.repository.UserRepository;
import jakarta.transaction.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository usersRepository) {
        this.userRepository = usersRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public boolean deleteUser(Long id) {
        try {
            userRepository.deleteById(id);
            return true;
        } catch(Exception e) {
            throw new RuntimeException("Failed to delete user: " + e.getMessage());
        }
    }

    @Transactional
    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);

        if(user == null) {
            throw new Error("User not found");
        }
        
        return user;
    }
}
