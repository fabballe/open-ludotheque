package fr.fabballe.openludoteque.security.jwt;

/**
 * Created by fabballe on 06/06/17.
 */
public class AccountCredentials {

    private String username;
    private String password;
    // getters & setters


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}