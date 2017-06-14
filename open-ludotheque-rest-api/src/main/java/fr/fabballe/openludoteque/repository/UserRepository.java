package fr.fabballe.openludoteque.repository;

import fr.fabballe.openludoteque.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 * Created by fabballe on 27/04/17.
 */
//@RepositoryRestResource(collectionResourceRel = "user", path = "users")
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

    User findByLogin(@Param("login") String login);
}
