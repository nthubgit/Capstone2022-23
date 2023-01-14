package com.neltyler.capstone202223.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

//Although it's a better practice, I'm keeping the bulk of the code in ReviewController because this is a simple program.
//In the future, it will be better to separate to increase readability.

@Service //bean
public class ReviewService {

//    private final ReviewRepository reviewRepository;
//
//    @Autowired
//    public ReviewService(ReviewRepository reviewRepository) {
//        this.reviewRepository = reviewRepository;
//    }
//
//    public List<Review> retrieveReviews() {
//        return reviewRepository.findAll();
//    }
//
//    public void createReview(Review review){
////        Optional<Review> reviewOptional = reviewRepository.findAccountByEmail(review.getEmail());
////        if (accountOptional.isPresent()) {
////            throw new IllegalStateException("Email has already been taken.");
////        }
//        reviewRepository.save(review);
//    }
//    public void deleteReview(Long reviewId) {
//        boolean checkExists = reviewRepository.existsById(reviewId);
//        if (!checkExists) {
//            throw new IllegalStateException("Review does not exist, check ID: " + reviewId + ".");
//        }
//        else {
//            reviewRepository.deleteById(reviewId);
//
//        }
//    }
////    @Transactional
////    public void updateReview(Long reviewId, String reviewText) {
////        Review review = reviewRepository.findById(accountId).orElseThrow(() ->
////                new IllegalStateException("Review does not exist, check ID: " + accountId + "."));
////
////        if (password != null && password.length() > 0) {
////            review.setPassword(password);
////        }
////        else {
////            throw new IllegalStateException("Password does not meet the conditions, try again.");
////        }
////    }
//
}
