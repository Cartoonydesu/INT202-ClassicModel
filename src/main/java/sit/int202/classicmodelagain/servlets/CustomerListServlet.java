package sit.int202.classicmodelagain.servlets;

import sit.int202.classicmodelagain.entities.Customer;
import sit.int202.classicmodelagain.repositories.CustomerRepository;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "CustomerListServlet", value = "/087/customers")
public class CustomerListServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        CustomerRepository customerRepository = new CustomerRepository();
        List<Customer> customerList = customerRepository.findAll();
        request.setAttribute("customerList", customerList);

        getServletContext().getRequestDispatcher("/CustomerList.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
