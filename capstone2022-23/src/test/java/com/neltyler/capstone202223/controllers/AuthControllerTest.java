package com.neltyler.capstone202223.controllers;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neltyler.capstone202223.auth.security.services.UserDetailsImpl;
import com.neltyler.capstone202223.auth.security.services.jwt.JwtUtils;
import com.neltyler.capstone202223.models.User;
import com.neltyler.capstone202223.payload.request.LoginRequest;
import com.neltyler.capstone202223.payload.request.SignupRequest;
import com.neltyler.capstone202223.repository.RoleRepository;
import com.neltyler.capstone202223.repository.UserRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.TestingAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ContextConfiguration(classes = {AuthController.class})
@ExtendWith(SpringExtension.class)
class AuthControllerTest {
    @Autowired
    private AuthController authController;

    @MockBean
    private AuthenticationManager authenticationManager;

    @MockBean
    private JwtUtils jwtUtils;

    @MockBean
    private PasswordEncoder passwordEncoder;

    @MockBean
    private RoleRepository roleRepository;

    @MockBean
    private UserRepository userRepository;

    /**
     * Method under test: {@link AuthController#authenticateUser(LoginRequest)}
     */
    @Test
    void shouldAuthenticateUser() throws Exception {
        when(jwtUtils.generateJwtToken((Authentication) any())).thenReturn("applesauce");
        when(authenticationManager.authenticate((Authentication) any())).thenReturn(new TestingAuthenticationToken(
                new UserDetailsImpl(123L, "tyler", "tyler@nelson.com", "123456", new ArrayList<>()), "Credentials"));

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setPassword("123456");
        loginRequest.setUsername("tyler");

        String content = (new ObjectMapper()).writeValueAsString(loginRequest);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/auth/signin")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"id\":123,\"username\":\"tyler\",\"email\":\"tyler@nelson.com\",\"roles\":[],\"tokenType\":\"Bearer\",\"accessToken"
                                        + "\":\"applesauce\"}"));
    }

    @Test
    void shouldNotAuthenticateUser() throws Exception {
        when(jwtUtils.generateJwtToken((Authentication) any())).thenReturn("ABC123");
        when(authenticationManager.authenticate((Authentication) any()))
                .thenReturn(new TestingAuthenticationToken("Principal", "Credentials"));

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setPassword("");
        loginRequest.setUsername("tyler");

        String content = (new ObjectMapper()).writeValueAsString(loginRequest);

        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/auth/signin")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().is(400));
    }

    @Test
    void shouldDeleteUser() throws Exception {
        doNothing().when(userRepository).deleteById((Long) any());
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.delete("/api/users/{id}", 123L);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @Test
    void ShouldGetUserById() throws Exception {
        User user = new User();
        user.setEmail("tyler@nelson.com");
        user.setId(123L);
        user.setPassword("123456");
        user.setReviews(new HashSet<>());
        user.setRoles(new HashSet<>());
        user.setUsername("tyler");
        Optional<User> ofResult = Optional.of(user);

        when(userRepository.findById((Long) any())).thenReturn(ofResult);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/users/{id}", 123L);
        MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"id\":123,\"username\":\"tyler\",\"email\":\"tyler@nelson.com\",\"password\":\"123456\",\"roles\":[],"
                                        + "\"reviews\":[]}"));
    }
    @Test
    void shouldRegisterUser() throws Exception {
        User user = new User();
        user.setEmail("tyler@nelson.com");
        user.setId(123L);
        user.setPassword("123456");
        user.setReviews(new HashSet<>());
        user.setRoles(new HashSet<>());
        user.setUsername("tyler");
        when(userRepository.existsByEmail((String) any())).thenReturn(false);
        when(userRepository.existsByUsername((String) any())).thenReturn(false);
        when(userRepository.save((User) any())).thenReturn(user);

        SignupRequest signupRequest = new SignupRequest();
        signupRequest.setEmail("tyler@nelson.com");
        signupRequest.setPassword("123456");
        signupRequest.setRole(new HashSet<>());
        signupRequest.setUsername("tyler");
        String content = (new ObjectMapper()).writeValueAsString(signupRequest);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/auth/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().is(200))
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content().string("{\"message\":\"User registered successfully! Please redirect yourself to the Login page.\"}"));
    }
    @Test //dupe username
    void shouldNotRegisterUser() throws Exception {
        User user = new User();
        user.setEmail("tyler@nelson.com");
        user.setId(123L);
        user.setPassword("123456");
        user.setReviews(new HashSet<>());
        user.setRoles(new HashSet<>());
        user.setUsername("tyler");
        when(userRepository.existsByEmail((String) any())).thenReturn(true);
        when(userRepository.existsByUsername((String) any())).thenReturn(true);
        when(userRepository.save((User) any())).thenReturn(user);

        SignupRequest signupRequest = new SignupRequest();
        signupRequest.setEmail("tyler@nelson.com");
        signupRequest.setPassword("123456");
        signupRequest.setRole(new HashSet<>());
        signupRequest.setUsername("tyler");
        String content = (new ObjectMapper()).writeValueAsString(signupRequest);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/auth/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().is(400))
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content().string("{\"message\":\"Error: Username is already taken!\"}"));
    }
    @Test //dupe email
    void shouldNotRegisterUser2() throws Exception {
        User user = new User();
        user.setEmail("tyler@nelson.com");
        user.setId(123L);
        user.setPassword("123456");
        user.setReviews(new HashSet<>());
        user.setRoles(new HashSet<>());
        user.setUsername("tyler");
        when(userRepository.existsByEmail((String) any())).thenReturn(true);
        when(userRepository.existsByUsername((String) any())).thenReturn(false);
        when(userRepository.save((User) any())).thenReturn(user);

        SignupRequest signupRequest = new SignupRequest();
        signupRequest.setEmail("tyler@nelson.com");
        signupRequest.setPassword("123456");
        signupRequest.setRole(new HashSet<>());
        signupRequest.setUsername("tyler");
        String content = (new ObjectMapper()).writeValueAsString(signupRequest);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/auth/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().is(400))
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content().string("{\"message\":\"Error: Email is already in use!\"}"));
    }


    @Test //something about this logic seems off, fix later
    void shouldUpdatePassword() throws Exception {
        User user = new User();
        user.setEmail("tyler@nelson.com");
        user.setId(123L);
        user.setPassword("123456");
        user.setReviews(new HashSet<>());
        user.setRoles(new HashSet<>());
        user.setUsername("tyler");
        Optional<User> ofResult = Optional.of(user);

        User user1 = new User();
        user1.setEmail("tyler@nelson.com");
        user1.setId(123L);
        user1.setPassword("123456");
        user1.setReviews(new HashSet<>());
        user1.setRoles(new HashSet<>());
        user1.setUsername("tyler");
        when(userRepository.save((User) any())).thenReturn(user1);
        when(userRepository.findById((Long) any())).thenReturn(ofResult);
        when(passwordEncoder.encode((CharSequence) any())).thenReturn("secret");

        User user2 = new User();
        user2.setEmail("tyler@nelson.com");
        user2.setId(123L);
        user2.setPassword("123456");
        user2.setReviews(new HashSet<>());
        user2.setRoles(new HashSet<>());
        user2.setUsername("tyler");
        String content = (new ObjectMapper()).writeValueAsString(user2);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.put("/api/users/{id}/", 123L)
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.content()
                        .string(
                                "{\"id\":123,\"username\":\"tyler\",\"email\":\"tyler@nelson.com\",\"password\":\"123456\",\"roles\":[],"
                                        + "\"reviews\":[]}"));
    }
}

