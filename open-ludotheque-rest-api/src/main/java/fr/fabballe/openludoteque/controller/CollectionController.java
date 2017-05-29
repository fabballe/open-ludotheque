package fr.fabballe.openludoteque.controller;

import fr.fabballe.openludoteque.model.Collection;
import fr.fabballe.openludoteque.repository.CollectionRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by fabballe on 29/05/17.
 */
@RestController
@Transactional
public class CollectionController {

    private CollectionRepository collectionRepository;

    public CollectionController(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }


    @PostMapping(value = "/collections", produces = "application/hal+json")
    public HttpEntity<Collection> addCollection(@RequestParam(value = "name", required = true) String name) {

        Collection collection = new Collection(name);
        collection = collectionRepository.save(collection);

        return new ResponseEntity<>(collection, HttpStatus.OK);
    }

    @GetMapping(value = "/collections", produces = "application/hal+json")
    public ResponseEntity<Resources<Resource<Collection>>> getCollections(Pageable pageable) {
        Iterable<Collection> collections = collectionRepository.findAll();

        List<Resource<Collection>> stream = StreamSupport.stream(collections.spliterator(), false)
                .map(collection -> transformCollectionToHateaosResource(collection))
                .collect(Collectors.toList());

        Resources<Resource<Collection>> result = new Resources<>(stream);

        //TODO: voir quels liens on rajoute pour la pagination

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    private Resource<Collection> transformCollectionToHateaosResource(Collection collection) {
        Link selfLink = linkTo(methodOn(CollectionController.class).getCollection(collection.getName())).withSelfRel();
        collection.add(selfLink);
        return new Resource<>(collection);
    }

    @GetMapping(value = "/collections/{name}", produces = "application/hal+json")
    public ResponseEntity<Resource<Collection>> getCollection(@PathVariable String name) {

        Collection collection = collectionRepository.findByName(name);
        Resource<Collection> result = transformCollectionToHateaosResource(collection);


        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
