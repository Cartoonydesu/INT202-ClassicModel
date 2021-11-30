package sit.int202.classicmodelagain.repositories;

import sit.int202.classicmodelagain.entities.Product;
import sit.int202.classicmodelagain.services.EntityManagerService;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

public class ProductRepository {

    private static int PAGE_SIZE = 10;

    private EntityManager getEntityManager(){
        return EntityManagerService.getEntityManager();
    }

    public Product findProduct(String productCode){
        return find(productCode);
    }

    public Product find(String productCode){
        EntityManager entityManager = getEntityManager();
        Product product = entityManager.find(Product.class,productCode);
        entityManager.close();
        return product;
    }

    public int getDefaultPageSize() {
        return PAGE_SIZE;
    }

    public List<Product> findAll(int page, int pageSize) {
        int startPosition = (page - 1) * pageSize;
        EntityManager em = EntityManagerService.getEntityManager();
        Query query = em.createNamedQuery("Product.FindAll");
        query.setFirstResult(startPosition);
        query.setMaxResults(pageSize);
        List<Product> productList = query.getResultList();
        return productList;
    }

    public int countAll() {
        EntityManager entityManager = EntityManagerService.getEntityManager();
        int number = ((Number) entityManager.createNamedQuery("Product.Count").getSingleResult()).intValue();
        entityManager.close();
        return number;
    }
}
