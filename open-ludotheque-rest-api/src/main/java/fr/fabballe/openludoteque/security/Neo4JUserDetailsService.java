package fr.fabballe.openludoteque.security;

import fr.fabballe.openludoteque.model.User;
import fr.fabballe.openludoteque.repository.UserRepository;
import fr.fabballe.openludoteque.security.jwt.JwtUserFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * Created by fabballe on 06/06/17.
 */
@Component("userDetailsService")
public class Neo4JUserDetailsService implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(Neo4JUserDetailsService.class);

    private UserRepository userRepository;

    public Neo4JUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.debug("Authenticating {}", email);

        String lowerCaseEmail = email.toLowerCase();

        System.out.println("lowerCaseEmail = " + lowerCaseEmail);

        Optional<User> userFromDatabase = Optional.ofNullable(userRepository.findByEmail(lowerCaseEmail));

        return userFromDatabase
                .map(user -> JwtUserFactory.create(user))
                .orElseThrow(() -> new UsernameNotFoundException("User " + lowerCaseEmail + "was not found"));

    }
}
