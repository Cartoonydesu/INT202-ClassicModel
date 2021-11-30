package sit.int202.classicmodelagain.services;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerService {
    private final static EntityManagerFactory emf = Persistence.createEntityManagerFactory("classic-model");

    public static EntityManager getEntityManager(){
        return emf.createEntityManager();
    }
}
