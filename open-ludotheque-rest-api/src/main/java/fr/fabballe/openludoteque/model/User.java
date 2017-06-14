package fr.fabballe.openludoteque.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.hateoas.ResourceSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by fabballe on 27/04/17.
 */
@NodeEntity
public class User extends ResourceSupport {

    @GraphId
    private Long id;

    private String email;

//    @JsonIgnore
    private String password;

    private String firstName;

    private String lastName;

    //TODO a changer
    private List<String> authorities = new ArrayList<>();

    private User() {
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public User(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Neo4j doesn't REALLY have bi-directional relationships. It just means when querying
     * to ignore the direction of the relationship.
     * https://dzone.com/articles/modelling-data-neo4j
     */
//    @Relationship(type = "OWN", direction = Relationship.UNDIRECTED)
//    private Set<Product> own;
//
//    @Relationship(type = "INTERESTED_BY", direction = Relationship.UNDIRECTED)
//    private Set<Product> interestedBy;
//
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<String> authorities) {
        this.authorities = authorities;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
