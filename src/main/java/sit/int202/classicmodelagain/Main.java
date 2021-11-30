package sit.int202.classicmodelagain;

import sit.int202.classicmodelagain.repositories.ProductRepository;

public class Main {

    public static void main(String[] args) {

        ProductRepository productRepository = new ProductRepository();
        System.out.println(productRepository.countAll());
        System.out.println(productRepository.findAll(1, 15));

    }
}
