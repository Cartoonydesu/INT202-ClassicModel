package sit.int202.classicmodelagain.servlets;

import sit.int202.classicmodelagain.entities.Product;
import sit.int202.classicmodelagain.models.Cart;
import sit.int202.classicmodelagain.models.ClassicModelLineItem;
import sit.int202.classicmodelagain.repositories.ProductRepository;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "AddToCartServlet", value = "/add-to-cart")
public class AddToCartServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String productCode = request.getParameter("productCode");
        HttpSession session = request.getSession();
        Cart<String, ClassicModelLineItem> cart = (Cart) session.getAttribute("cart");
        if(cart == null){
            cart = new Cart<>();
            session.setAttribute("cart",cart);
        }
        ProductRepository productRepository = new ProductRepository();
        Product product = productRepository.findProduct(productCode);
        if(product != null){
            cart.addItem(productCode,new ClassicModelLineItem(product));
        }
        response.getWriter().print(cart.countPiece());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
