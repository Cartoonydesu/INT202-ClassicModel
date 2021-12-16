package sit.int202.classicmodelagain.servlets;

import sit.int202.classicmodelagain.entities.Product;
import sit.int202.classicmodelagain.models.Cart;
import sit.int202.classicmodelagain.models.ClassicModelLineItem;
import sit.int202.classicmodelagain.repositories.ProductRepository;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "UpdateCartServlet", value = "/update-cart")
public class UpdateCartServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String productCode = request.getParameter("productCode");
        String newQuantity = request.getParameter("quantity");
        HttpSession session = request.getSession();
        Cart<String, ClassicModelLineItem> cart = (Cart) session.getAttribute("cart");

        ProductRepository productRepository = new ProductRepository();
        Product product = productRepository.find(productCode);
        if(Integer.valueOf(newQuantity) == 0){
            cart.removeItem(productCode);
        }else if(product != null || Integer.valueOf(newQuantity) > 0){
            cart.updateItem(productCode, Integer.valueOf(newQuantity));
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
