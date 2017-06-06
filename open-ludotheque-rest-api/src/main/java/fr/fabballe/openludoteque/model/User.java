package fr.fabballe.openludoteque.model;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.hateoas.ResourceSupport;

/**
 * Created by fabballe on 27/04/17.
 */
@NodeEntity
public class User extends ResourceSupport {

    @GraphId
    private Long id;

    private String login;

    private String password;

    private User() {
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
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
//    public void addProductOwn(Product product) {
//        if (own == null) {
//            own = new HashSet<>();
//        }
//        own.add(product);
//    }
//
//    public void addProductInterested(Product product) {
//        if (interestedBy == null) {
//            interestedBy = new HashSet<>();
//        }
//        interestedBy.add(product);
//    }

//    public Set<Product> getOwn() {
//        return own;
//    }
//
//    public void setOwn(Set<Product> own) {
//        this.own = own;
//    }
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
