package com.neltyler.capstone202223.listing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long> {

    @Query
    Optional<Listing> findListingByEmail(String email);
}
