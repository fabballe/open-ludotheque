package fr.fabballe.openludoteque.repository;

import fr.fabballe.openludoteque.model.Collection;
import fr.fabballe.openludoteque.model.Comic;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by fabballe on 27/04/17.
 */
//@RepositoryRestResource(collectionResourceRel = "user", path = "users")
@CrossOrigin(origins = "*")
public interface CollectionRepository extends PagingAndSortingRepository<Collection, Long> {

    Collection findByName(String name);

//    User findByName(@Param("name") String name);
}
