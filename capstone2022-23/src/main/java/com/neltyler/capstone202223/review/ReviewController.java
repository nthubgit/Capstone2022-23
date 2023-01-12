package com.neltyler.capstone202223.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    //controller
    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> retrieveReviews() {
        return reviewService.retrieveReviews();
    }

    @PostMapping
    public void createReview(@RequestBody Review review) {
        reviewService.createReview(review);
    }
    @DeleteMapping (path = "{reviewId}")
    public void deleteReview(@PathVariable("reviewId") Long reviewId) {
        reviewService.deleteReview(reviewId);
    }
//    @PutMapping (path = "{reviewId}")
//    public void updateReview(
//            @PathVariable("reviewId") Long reviewId,
//            @RequestParam(required = false) String password)
//    {
//        reviewService.updateReview(reviewId, password);
//    }


}