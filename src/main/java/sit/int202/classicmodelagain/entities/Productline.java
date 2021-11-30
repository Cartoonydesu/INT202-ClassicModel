package sit.int202.classicmodelagain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "productlines")
@Entity
public class Productline {
    @Id
    @Column(name = "productLine", nullable = false, length = 50)
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}