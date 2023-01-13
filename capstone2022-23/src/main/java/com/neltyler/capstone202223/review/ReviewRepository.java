package com.neltyler.capstone202223.review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByUserId(Long postId);

    @Transactional
    void deleteByUserId(long userId);

   List<Review> findByItemId(Integer itemId);
}
