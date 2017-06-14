package fr.fabballe.openludoteque.security.jwt;

/**
 * FROM: https://github.com/szerhusenBC/jwt-spring-security-demo/blob/master/src/main/java/org/zerhusen/security/JwtUser.java
 * Created by fabballe on 06/06/17.
 */

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class JwtUser implements UserDetails {

    private final String login;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public JwtUser(
            String login,
            String password,
            Collection<? extends GrantedAuthority> authorities
//            boolean enabled,
//            Date lastPasswordResetDate
    ) {
        this.login = login;
        this.password = password;
        this.authorities = authorities;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
