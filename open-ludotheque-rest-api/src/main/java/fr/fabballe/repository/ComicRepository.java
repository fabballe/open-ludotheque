package fr.fabballe.repository;

import fr.fabballe.model.Comic;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by fabballe on 27/04/17.
 */
//@RepositoryRestResource(collectionResourceRel = "user", path = "users")
public interface ComicRepository extends PagingAndSortingRepository<Comic, Long> {

//    User findByName(@Param("name") String name);
}
