package com.neltyler.capstone202223.review;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class ReviewConfig {

    @Bean
    CommandLineRunner commandLineRunner(ReviewRepository reviewRepository) {
        return args -> {
            Review review1 = new Review(
                    1L,
                    "admin",
                    "cool review text goes here",
                    LocalDate.of(2023, JANUARY, 5),
                    3.5,
                    9

            );

            reviewRepository.saveAll(
                    List.of(review1)
            );
        };
    };
};
