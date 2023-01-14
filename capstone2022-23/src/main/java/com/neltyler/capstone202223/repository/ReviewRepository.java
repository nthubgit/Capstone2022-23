package com.neltyler.capstone202223.repository;

import com.neltyler.capstone202223.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByItemId(Integer itemId);

//    List<Review> findByUserId(Long postId);
//
//   List<Review> findByItemId(Integer itemId);
}
