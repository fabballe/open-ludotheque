package fr.fabballe.openludoteque.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

/**
 * Created by fabballe on 06/06/17.
 */
public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter {

    //TODO A enlever du static
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    private JwtUtil jwtUtil;

    public JWTLoginFilter(String url, AuthenticationManager authManager, JwtUtil jwtUtil) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        AccountCredentials creds = new ObjectMapper().readValue(req.getInputStream(), AccountCredentials.class);

        return getAuthenticationManager().authenticate(
                new UsernamePasswordAuthenticationToken(creds.getUsername(), creds.getPassword(), Collections.emptyList())
        );
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication auth) throws IOException, ServletException {
        String jwt = jwtUtil.generateJwtToken(auth.getName());
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + jwt);
    }
}
