package fr.fabballe.openludoteque.controller;

import fr.fabballe.openludoteque.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by fabballe on 29/05/17.
 */
@RestController
@Transactional
public class UserControler {

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(15);
    }

    @PostMapping(value = "/user", produces = "application/hal+json")
    public ResponseEntity<Resource<User>> addUser(@RequestParam(value = "name", required = true) String name, @RequestParam(value = "password", required = true) String password) {

        User user = new User(name);
        user.setName(name);
        user.setPassword(passwordEncoder().encode(password));

        Resource<User> result = new Resource(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
