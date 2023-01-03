package com.neltyler.capstone202223.listing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/users")
public class ListingController {

    private final ListingService listingService;

    //controller
    @Autowired
    public ListingController(ListingService listingService) {
        this.listingService = listingService;
    }

    @GetMapping
    public List<Listing> getListings() {
    return listingService.getListings();
    }

    @PostMapping
    public void registerNewListing(@RequestBody Listing listing) {
        listingService.registerNewListing(listing);
    }
    @DeleteMapping (path = "{listingId}")
    public void deleteListing(@PathVariable("listingId") Long listingId) {
        listingService.deleteListing(listingId);
    }
    @PutMapping (path = "{listingId}")
    public void updateListing(
            @PathVariable("listingId") Long listingId,
            @RequestParam(required = false) String password)
    {
        listingService.updateListing(listingId, password);
    }


}