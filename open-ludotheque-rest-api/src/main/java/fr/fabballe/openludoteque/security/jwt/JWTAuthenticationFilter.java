package fr.fabballe.openludoteque.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static java.util.Collections.emptyList;

/**
 * Created by fabballe on 06/06/17.
 */
public class JWTAuthenticationFilter extends GenericFilterBean {

    private JwtUtil jwtUtil;

    public JWTAuthenticationFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;

        String token = httpRequest.getHeader(JWTLoginFilter.HEADER_STRING);

        try {
            Authentication authentication = extractAuthorizationFromJwtToken(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch(JwtException e){
            ((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED);
        }

        filterChain.doFilter(request, response);


    }

    private Authentication extractAuthorizationFromJwtToken(String token) {
        if (!StringUtils.isEmpty(token) && !"null".equalsIgnoreCase(token)) {
            try {
                Jws<Claims> jwtToken = jwtUtil.decodeJwtToken(token);
                String user = jwtToken.getBody().getSubject();

                return user != null ? new UsernamePasswordAuthenticationToken(user, null, emptyList()) : null;
            } catch (SignatureException e) {
                //TODO voir si on log cette erreur en debug ou pas ?
                throw new JwtException("Cannot decode JWT Token");
            }
        }
        throw new JwtException("Cannot decode JWT Token");
    }
}
