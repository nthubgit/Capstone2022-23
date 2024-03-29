package com.neltyler.capstone202223.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Entity
@Table
public class Review {
    @Id
    @SequenceGenerator(
            name = "review_sequence",
            sequenceName = "review_sequence",
            allocationSize= 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "review_sequence"
    )
    private long id;
    @NotNull
    private String username;
    @NotNull
    private String reviewText;
    private LocalDate createdAt;
    private Double rating;
    private Integer itemId;

    public Review() {
    }

    public Review(long id, String username, String reviewText, LocalDate createdAt, Double rating, Integer itemId) {
        this.id = id;
        this.username = username;
        this.reviewText = reviewText;
        this.createdAt = createdAt;
        this.rating = rating;
        this.itemId = itemId;
    }

    public Review(long id, String username, String reviewText, Double rating, Integer itemId) {
        this.id = id;
        this.username = username;
        this.reviewText = reviewText;
        this.rating = rating;
        this.itemId = itemId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", username=" + username +
                ", reviewText='" + reviewText + '\'' +
                ", createdAt=" + createdAt +
                ", rating=" + rating +
                ", itemId=" + itemId +
                '}';
    }
}

