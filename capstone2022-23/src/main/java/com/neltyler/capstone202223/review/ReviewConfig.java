package com.neltyler.capstone202223.account;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class AccountConfig {

    @Bean
    CommandLineRunner commandLineRunner(AccountRepository accountRepository) {
        return args -> {
            Account admin = new Account(
                    1,
                    "Tyler",
                    "Nelson",
                    LocalDate.of(1990, JULY, 27),
                    "admin@gmail.com",
                    "123456"
            );

            Account basic = new Account(
                    2,
                    "Mike",
                    "Potash",
                    LocalDate.of(2004, JULY, 11),
                    "mikeP@gmail.com",
                    "1"
            );

            accountRepository.saveAll(
                    List.of(admin, basic)
            );
        };
    };
};
