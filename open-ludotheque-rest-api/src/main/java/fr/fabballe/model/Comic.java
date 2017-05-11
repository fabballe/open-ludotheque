package fr.fabballe.model;

import org.neo4j.ogm.annotation.NodeEntity;

/**
 * Created by fabballe on 27/04/17.
 */
@NodeEntity
public class Comic extends Product {

    private String author;

    private Comic() {
        super();
        // Empty constructor required as of Neo4j API 2.0.5
    }

    public Comic(String name, String author) {
        super(name);
        this.author = author;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
