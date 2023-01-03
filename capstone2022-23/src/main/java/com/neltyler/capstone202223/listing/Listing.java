package com.neltyler.capstone202223.listing;


import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table
public class Listing {
    @Id
    @SequenceGenerator(
            name = "listing_sequence",
            sequenceName = "listing_sequence",
            allocationSize= 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "listing_sequence"
    )
    private long id;
    private String title;
    //using double/float for money is bad but easier for this poc
    private Double price;
    private String description;
    private String imgPath;
    private String createdAt;

    public Listing() {
    }

    public Listing(long id, String title, Double price, String description, String imgPath, String createdAt) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imgPath = imgPath;
        this.createdAt = createdAt;
    }

    public Listing(String title, Double price, String description, String imgPath, String createdAt) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imgPath = imgPath;
        this.createdAt = createdAt;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Listing{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", imgPath='" + imgPath + '\'' +
                ", createdAt='" + createdAt + '\'' +
                '}';
    }
}

