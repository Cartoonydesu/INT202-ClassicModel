package sit.int202.classicmodelagain.filters;

import sit.int202.classicmodelagain.entities.Customer;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;
import java.io.IOException;

@WebFilter(filterName = "AuthenFilter087",
        servletNames = {"ServletUser1","ServletUser2"})
public class UserAuthenFilter087 implements Filter {
    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpSession session = ((HttpServletRequest) request).getSession(false);
        if(session==null || session.getAttribute("user")==null){
            return;
        }
        else if(((Customer) session.getAttribute("user")).getRole()=="user"){
            chain.doFilter(request, response);
        }
        else if(((Customer) session.getAttribute("user")).getRole()=="admin"){
            chain.doFilter(request, response);
        }
        else{
            ((HttpServletResponse)response).sendError(HttpServletResponse.SC_UNAUTHORIZED);
        }
        System.out.println(session.getAttribute("user"));
    }
}
