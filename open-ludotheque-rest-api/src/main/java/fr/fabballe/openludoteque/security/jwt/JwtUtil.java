package fr.fabballe.openludoteque.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.xml.bind.DatatypeConverter;
import java.util.Date;

/**
 * Created by fabballe on 13/06/17.
 */
@Component
public class JwtUtil {

    @Value("${jwt.expiration}")
    private long jwtExpirationTime;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.token.prefix}")
    private String jwtTokenPrefix;

    public String generateJwtToken(String username) {
        String jwt = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationTime))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
        return jwt;
    }

    public Jws<Claims> decodeJwtToken(String token){
        token = token.replace(jwtTokenPrefix, "");
        return Jwts.parser()
            .setSigningKey(DatatypeConverter.parseBase64Binary(jwtSecret))
            .parseClaimsJws(token);
    }
}
