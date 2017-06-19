package fr.fabballe.openludoteque.controller;

import fr.fabballe.openludoteque.model.User;
import fr.fabballe.openludoteque.repository.UserRepository;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

/**
 * Created by fabballe on 29/05/17.
 */
//@CrossOrigin
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
    public ResponseEntity<Resource<User>> addUser(@RequestBody User user) {

        String cryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(cryptedPassword);

        user = this.userRepository.save(user);

        Resource<User> result = new Resource(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = "/user", produces = "application/hal+json")
    public ResponseEntity<Resource<User>> getUser(Principal principal){

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(" auth.getName()= " + principal.getName());
        String email = auth.getName();

        User user = this.userRepository.findByEmail(email);
        Resource<User> result = new Resource(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
