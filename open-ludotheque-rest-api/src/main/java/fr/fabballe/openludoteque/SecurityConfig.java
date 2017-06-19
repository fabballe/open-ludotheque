package fr.fabballe.openludoteque;

import fr.fabballe.openludoteque.security.AjaxAuthenticationFailureHandler;
import fr.fabballe.openludoteque.security.AjaxAuthenticationSuccessHandler;
import fr.fabballe.openludoteque.security.RESTAuthenticationEntryPoint;
import fr.fabballe.openludoteque.security.jwt.JWTAuthenticationFilter;
import fr.fabballe.openludoteque.security.jwt.JWTLoginFilter;
import fr.fabballe.openludoteque.security.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * Created by kuroro on 05/06/17.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler;

    @Autowired
    private AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler;

    @Autowired
    private RESTAuthenticationEntryPoint authenticationEntryPoint;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http //
                .formLogin() //
                .loginProcessingUrl("/api/authentication") //
                .successHandler(ajaxAuthenticationSuccessHandler) //
                .failureHandler(ajaxAuthenticationFailureHandler) //
                .and()
                .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint)
                .and()
                .authorizeRequests() //
//                .antMatchers(HttpMethod.OPTIONS, "/api/authentication").permitAll()
                .antMatchers(HttpMethod.GET, "/api/secure/**").authenticated()
                .antMatchers(HttpMethod.POST, "/api/secure/**").authenticated()
                .antMatchers(HttpMethod.PUT, "/api/secure/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/api/secure/**").authenticated()
                .anyRequest().permitAll()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().csrf().disable();

        // Custom JWT based security filter
        http
                .addFilterBefore(corsFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTLoginFilter("/api/authentication", authenticationManager(), jwtUtil, passwordEncoder()), UsernamePasswordAuthenticationFilter.class)
                        // And filter other requests to check the presence of JWT in header
                .addFilterBefore(new JWTAuthenticationFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);

        // disable page caching
        http.headers().cacheControl();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    /**
     * Gestion de la conf CORS
     *
     * @return
     */
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}
