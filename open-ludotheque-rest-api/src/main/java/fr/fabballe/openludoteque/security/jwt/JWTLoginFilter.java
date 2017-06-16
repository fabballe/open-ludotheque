package fr.fabballe.openludoteque.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

/**
 * Created by fabballe on 06/06/17.
 */
public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter {

    private static Logger logger = LoggerFactory.getLogger(JWTLoginFilter.class);

    //TODO A enlever du static
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    private JwtUtil jwtUtil;

    private PasswordEncoder passwordEncoder;

    public JWTLoginFilter(String url, AuthenticationManager authManager, JwtUtil jwtUtil, PasswordEncoder passwordEncoder) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
        // permet d'activer les filtres CORS
        setContinueChainBeforeSuccessfulAuthentication(true);
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
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

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            chain.doFilter(req, res);
        } else {
            super.doFilter(req, res, chain);
        }
    }
}
