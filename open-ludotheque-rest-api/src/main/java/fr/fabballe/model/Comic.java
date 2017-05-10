package fr.fabballe.model;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by fabballe on 27/04/17.
 */
@NodeEntity
public class Comic extends Product {

    @GraphId
    private Long id;

    private Comic() {
        super();
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public Comic(String name) {
        super(name);
    }

}
