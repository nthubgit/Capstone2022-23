package com.neltyler.capstone202223.controllers;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neltyler.capstone202223.models.Review;
import com.neltyler.capstone202223.models.User;
import com.neltyler.capstone202223.repository.ReviewRepository;
import com.neltyler.capstone202223.repository.UserRepository;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Optional;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {ReviewController.class})
@ExtendWith(SpringExtension.class)
class ReviewControllerTest {
    @Autowired
    private ReviewController reviewController;

    @MockBean
    private ReviewRepository reviewRepository;

    @MockBean
    private UserRepository userRepository;

    /**
     * Method under test: {@link ReviewController#createReview(Long, Review)}
     */
    @Test
    @Disabled("TODO: Complete this test")
    void testCreateReview() throws Exception {
        // TODO: Complete this test.
        //   Reason: R013 No inputs found that don't throw a trivial exception.
        //   Diffblue Cover tried to run the arrange/act section, but the method under
        //   test threw
        //   com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Java 8 date/time type `java.time.LocalDate` not supported by default: add Module "com.fasterxml.jackson.datatype:jackson-datatype-jsr310" to enable handling (through reference chain: com.neltyler.capstone202223.models.Review["createdAt"])
        //       at com.fasterxml.jackson.databind.exc.InvalidDefinitionException.from(InvalidDefinitionException.java:77)
        //       at com.fasterxml.jackson.databind.SerializerProvider.reportBadDefinition(SerializerProvider.java:1300)
        //       at com.fasterxml.jackson.databind.ser.impl.UnsupportedTypeSerializer.serialize(UnsupportedTypeSerializer.java:35)
        //       at com.fasterxml.jackson.databind.ser.BeanPropertyWriter.serializeAsField(BeanPropertyWriter.java:728)
        //       at com.fasterxml.jackson.databind.ser.std.BeanSerializerBase.serializeFields(BeanSerializerBase.java:774)
        //       at com.fasterxml.jackson.databind.ser.BeanSerializer.serialize(BeanSerializer.java:178)
        //       at com.fasterxml.jackson.databind.ser.DefaultSerializerProvider._serialize(DefaultSerializerProvider.java:480)
        //       at com.fasterxml.jackson.databind.ser.DefaultSerializerProvider.serializeValue(DefaultSerializerProvider.java:319)
        //       at com.fasterxml.jackson.databind.ObjectMapper._writeValueAndClose(ObjectMapper.java:4568)
        //       at com.fasterxml.jackson.databind.ObjectMapper.writeValueAsString(ObjectMapper.java:3821)
        //   See https://diff.blue/R013 to resolve this issue.

        MockHttpServletRequestBuilder contentTypeResult = MockMvcRequestBuilders.post("/api/users/{userId}/reviews", 123L)
                .contentType(MediaType.APPLICATION_JSON);
        LocalDate createdAt = LocalDate.ofEpochDay(1L);

        Review review = new Review();
        review.setCreatedAt(createdAt);
        review.setId(123L);
        review.setItemId(123);
        review.setRating(10.0d);
        review.setReviewText("Review Text");
        review.setUsername("janedoe");
        MockHttpServletRequestBuilder requestBuilder = contentTypeResult
                .content((new ObjectMapper()).writeValueAsString(review));
        MockMvcBuilders.standaloneSetup(reviewController).build().perform(requestBuilder);
    }

    /**
     * Method under test: {@link ReviewController#createReview(Long, Review)}
     */
    @Test
    void testCreateReview2() throws Exception {
        Review review = new Review();
        review.setCreatedAt(LocalDate.ofEpochDay(1L));
        review.setId(123L);
        review.setItemId(123);
        review.setRating(10.0d);
        review.setReviewText("Review Text");
        review.setUsername("janedoe");
        when(reviewRepository.save((Review) any())).thenReturn(review);

        User user = new User();
        user.setEmail("jane.doe@example.org");
        user.setId(123L);
        user.setPassword("iloveyou");
        user.setReviews(new HashSet<>());
        user.setRoles(new HashSet<>());
        user.setUsername("janedoe");
        Optional<User> ofResult = Optional.of(user);
        when(userRepository.findById((Long) any())).thenReturn(ofResult);

        Review review1 = new Review();
        review1.setCreatedAt(null);
        review1.setId(123L);
        review1.setItemId(123);
        review1.setRating(10.0d);
        review1.setReviewText("Review Text");
        review1.setUsername("janedoe");
        String content = (new ObjectMapper()).writeValueAsString(review1);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/users/{userId}/reviews", 123L)
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(reviewController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"id\":123,\"username\":\"janedoe\",\"reviewText\":\"Review Text\",\"createdAt\":[1970,1,2],\"rating\":10.0,"
                                        + "\"itemId\":123}"));
    }
}

