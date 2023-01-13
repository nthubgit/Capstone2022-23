package com.neltyler.capstone202223.review;

import java.util.List;
import com.neltyler.capstone202223.auth.repository.UserRepository;
import com.neltyler.capstone202223.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ReviewController {

    @Autowired
    private UserRepository UserRepository;

    @Autowired
    private ReviewRepository ReviewRepository;

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @GetMapping("/users/{userId}/reviews")
    public ResponseEntity<List<Review>> getAllReviewsByUserId(@PathVariable(value = "userId") Long userId) {
        if (!UserRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }

        List<Review> reviews = ReviewRepository.findByUserId(userId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @GetMapping("/reviews/item/{itemId}")
    public ResponseEntity<List<Review>> getReviewsByItemId(@PathVariable(value = "itemId") Integer itemId) {

        List<Review> reviews = ReviewRepository.findByItemId(itemId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @GetMapping("/reviews/{id}")
    public ResponseEntity<Review> getReviewsByUserId(@PathVariable(value = "id") Long id) {
        Review review = ReviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Review with id = " + id));

        return new ResponseEntity<>(review, HttpStatus.OK);
    }



    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PostMapping("/users/{userId}/reviews")
    public ResponseEntity<Review> createReview(@PathVariable(value = "userId") Long userId,
                                                 @RequestBody Review reviewRequest) {
        Review review = UserRepository.findById(userId).map(user -> {
            reviewRequest.setUser(user);
            return ReviewRepository.save(reviewRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userId));

        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PutMapping("/reviews/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable("id") long id, @RequestBody Review reviewRequest) {
        Review review = ReviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ReviewId " + id + "not found"));

        review.setReviewText(reviewRequest.getReviewText());
        review.setRating(reviewRequest.getRating());

        return new ResponseEntity<>(ReviewRepository.save(review), HttpStatus.OK);
    }
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<HttpStatus> deleteReview(@PathVariable("id") long id) {
        ReviewRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @DeleteMapping("/users/{userId}/reviews")
    public ResponseEntity<List<Review>> deleteAllReviewsOfUser(@PathVariable(value = "userId") Long userId) {
        if (!UserRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }

        ReviewRepository.deleteByUserId(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
