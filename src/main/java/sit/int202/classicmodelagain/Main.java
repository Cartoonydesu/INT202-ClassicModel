package sit.int202.classicmodelagain;

import sit.int202.classicmodelagain.entities.Product;
import sit.int202.classicmodelagain.models.Cart;
import sit.int202.classicmodelagain.models.ClassicModelLineItem;
import sit.int202.classicmodelagain.repositories.ProductRepository;

public class Main {

    public static void main(String[] args) {
//        testProductLIst();
        testShoppingCart();
    }

    public static void testProductLIst(){
        ProductRepository productRepository = new ProductRepository();
        System.out.println(productRepository.countAll());
        System.out.println(productRepository.findAll(1, 15));
    }

    public static void testShoppingCart(){
        Cart<String, ClassicModelLineItem> cart = new Cart<>();
        ProductRepository productRepository = new ProductRepository();
        Product product = productRepository.find("S10_1678");
        cart.addItem(product.getId(), new ClassicModelLineItem(product, 5));
        product = productRepository.find("S12_3380");
        cart.addItem(product.getId(), new ClassicModelLineItem(product));
        System.out.println(cart.countItem());
        System.out.println(cart.countPiece());
        System.out.println(cart.getTotalPrice());
        System.out.println(cart.getAllItem());
        cart.removeItem("S10_1678");
        System.out.println(cart.countItem());
        System.out.println(cart.countPiece());
        System.out.println(cart.getTotalPrice());
        System.out.println(cart.getAllItem());
    }
}
