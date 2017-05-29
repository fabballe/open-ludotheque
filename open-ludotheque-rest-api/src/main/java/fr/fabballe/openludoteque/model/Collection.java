package fr.fabballe.openludoteque.model;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.hateoas.ResourceSupport;

/**
 * Created by fabballe on 27/04/17.
 */
@NodeEntity(label = "Collection")
public class Collection extends ResourceSupport {

    @GraphId
    private Long id;

    private String name;

    private Collection() {
        super();
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public Collection(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
