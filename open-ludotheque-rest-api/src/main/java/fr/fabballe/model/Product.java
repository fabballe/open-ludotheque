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
public abstract class Product {

    @GraphId
    private Long id;

    private String name;

    public Product() {
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public Product(String name) {
        this.id = id;
        this.name = name;
    }

//    /**
//     * Neo4j doesn't REALLY have bi-directional relationships. It just means when querying
//     * to ignore the direction of the relationship.
//     * https://dzone.com/articles/modelling-data-neo4j
//     */
//    @Relationship(type = "OWN", direction = Relationship.UNDIRECTED)
//    public Set<User> owner;
//
//    public Set<User> getOwner() {
//        return owner;
//    }
//
//    public void setOwner(Set<User> owner) {
//        this.owner = owner;
//    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
