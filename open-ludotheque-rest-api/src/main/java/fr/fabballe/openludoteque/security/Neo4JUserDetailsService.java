package fr.fabballe.openludoteque.security;

import fr.fabballe.openludoteque.model.User;
import fr.fabballe.openludoteque.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
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
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        log.debug("Authenticating {}", login);

        String lowerCaseLogin = login.toLowerCase();

        Optional<User> userFromDatabase = Optional.ofNullable(userRepository.findByLogin(lowerCaseLogin));

        return userFromDatabase.map(user -> {
            // TODO Voir pr les droits de l'utilisateur
            List<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
            return new org.springframework.security.core.userdetails.User(lowerCaseLogin, user.getPassword(), grantedAuthorities);
        }).orElseThrow(() -> new UsernameNotFoundException("User " + lowerCaseLogin + "was not found"));

    }
}
