package sit.int202.classicmodelagain.models;

import java.util.HashMap;
import java.util.Map;

public interface CartItem {
    public int getQuantity();
    public void setQuantity(int quantity);
    public double getUnitPrice();
    public double getTotal();
    public double getPercentDiscount();
}
