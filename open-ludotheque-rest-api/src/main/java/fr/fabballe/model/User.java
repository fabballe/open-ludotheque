package fr.fabballe.model;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by fabballe on 27/04/17.
 */
@NodeEntity
public class User {

    @GraphId
    private Long id;

    private String name;

    private User() {
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public User(String name) {
        this.name = name;
    }

    /**
     * Neo4j doesn't REALLY have bi-directional relationships. It just means when querying
     * to ignore the direction of the relationship.
     * https://dzone.com/articles/modelling-data-neo4j
     */
    @Relationship(type = "OWN", direction = Relationship.UNDIRECTED)
    private Set<Product> own;

    @Relationship(type = "INTERESTED_BY", direction = Relationship.UNDIRECTED)
    private Set<Product> interestedBy;

    public void addProductOwn(Product product) {
        if (own == null) {
            own = new HashSet<>();
        }
        own.add(product);
    }

    public void addProductInterested(Product product) {
        if (interestedBy == null) {
            interestedBy = new HashSet<>();
        }
        interestedBy.add(product);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Product> getOwn() {
        return own;
    }

    public void setOwn(Set<Product> own) {
        this.own = own;
    }
}
