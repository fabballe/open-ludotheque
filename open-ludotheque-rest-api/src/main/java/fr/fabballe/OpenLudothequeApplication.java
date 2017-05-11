package fr.fabballe;

import fr.fabballe.model.Comic;
import fr.fabballe.model.User;
import fr.fabballe.repository.ComicRepository;
import fr.fabballe.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Arrays;
import java.util.List;

@EnableTransactionManagement
@SpringBootApplication
@EnableNeo4jRepositories
public class OpenLudothequeApplication {

    private final static Logger log = LoggerFactory.getLogger(OpenLudothequeApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(OpenLudothequeApplication.class, args);
    }

    @Bean
    CommandLineRunner demo(UserRepository userRepository, ComicRepository comicRepository) {
        return args -> {

            comicRepository.deleteAll();
            Comic naruto = new Comic("naruto","author1");
            Comic onepiece = new Comic("onepiece", "author2");
            Comic mutafukaz = new Comic("mutafukaz", "author3");
            Comic fairytail = new Comic("fairytail", "author4");
            comicRepository.save(naruto);
            comicRepository.save(onepiece);
            comicRepository.save(mutafukaz);
            comicRepository.save(fairytail);



//            userRepository.deleteAll();
//
//            User fab = new User("Fabien");
//            fab.addProductOwn(naruto);
//            fab.addProductOwn(onepiece);
//            fab.addProductOwn(mutafukaz);
//
//            User steph = new User("Stephane");
//            steph.addProductInterested(naruto);
//            steph.addProductInterested(onepiece);
//
//            List<User> team = Arrays.asList(fab, steph);
//
//            log.info("Before linking up with Neo4j...");
//
//            team.stream().forEach(person -> log.info("\t" + person.toString()));
//
//            userRepository.save(fab);
//            userRepository.save(steph);

//            log.info("Lookup each person by name...");
//            team.stream().forEach(person -> log.info(
//                    "\t" + userRepository.findByName(person.getName()).toString()));
        };
    }
}
