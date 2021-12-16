package sit.int202.classicmodelagain.repositories;

import sit.int202.classicmodelagain.entities.Customer;
import sit.int202.classicmodelagain.services.EntityManagerService;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

public class CustomerRepository {
    public EntityManager getEntityManager(){
        return EntityManagerService.getEntityManager();
    }

    public Customer findByName(String name) {
        EntityManager em = getEntityManager();
        Query query = em.createNamedQuery("FIND_USER");
        query.setParameter("user_account", name);
        List<Customer> customers = query.getResultList();
        em.close();
        return customers.size()==0? null : customers.get(0);
    }

    public List<Customer> findAll(){
        EntityManager em = getEntityManager();
        Query query = em.createNamedQuery("Customer.FindAll");
        List<Customer> customers = query.getResultList();
        em.close();
        return customers;
    }


}
