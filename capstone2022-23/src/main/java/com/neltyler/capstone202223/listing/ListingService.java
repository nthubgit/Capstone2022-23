package com.neltyler.capstone202223.listing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service //bean
public class ListingService {

    private final ListingRepository listingRepository;

    @Autowired
    public ListingService(ListingRepository userRepository) {
        this.listingRepository = userRepository;
    }

    public List<Listing> getListings() {
        return listingRepository.findAll();
    }

    public void registerNewListing(Listing listing){
//        Optional<Listing> listingOptional = listingRepository.findListingByEmail(listing.getEmail());
//        if (listingOptional.isPresent()) {
//            throw new IllegalStateException("Email has already been taken.");
//        }
        listingRepository.save(listing);
    }
    public void deleteListing(Long listingId) {
        boolean checkExists = listingRepository.existsById(listingId);
        if (!checkExists) {
            throw new IllegalStateException("Listing does not exist, check ID: " + listingId + ".");
        }
        else {
            listingRepository.deleteById(listingId);
        }
    }
    @Transactional
    public void updateListing(Long listingId, String password) {
        Listing listing = listingRepository.findById(listingId).orElseThrow(() ->
                new IllegalStateException("Listing does not exist, check ID: " + listingId + "."));

        if (password != null && password.length() > 0) {

        }
        else {
            throw new IllegalStateException("");
        }
    }

}
