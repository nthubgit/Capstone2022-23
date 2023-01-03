package com.neltyler.capstone202223.listing;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.JULY;

@Configuration
public class ListingConfig {

    @Bean
    CommandLineRunner commandLineRunner(ListingRepository accountRepository) {
        return args -> {
            Listing admin = new Listing(

            );

            Listing basic = new Listing(

            );

            accountRepository.saveAll(
                    List.of()
            );
        };
    };
};
