package fr.fabballe.openludoteque.controller;

import fr.fabballe.openludoteque.model.User;
import fr.fabballe.openludoteque.repository.UserRepository;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by fabballe on 29/05/17.
 */
@RestController
@Transactional
@RequestMapping("/api")
public class UserControler {

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    public UserControler(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping(value = "/user", produces = "application/hal+json")
    public ResponseEntity<Resource<User>> addUser(@RequestParam(value = "email", required = true) String email, @RequestParam(value = "password", required = true) String password) {

        String cryptedPassword = passwordEncoder.encode(password);
        User user = new User(email, cryptedPassword);

        user = this.userRepository.save(user);

        Resource<User> result = new Resource(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
