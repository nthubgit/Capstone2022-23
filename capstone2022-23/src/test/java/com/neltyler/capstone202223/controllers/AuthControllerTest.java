package com.neltyler.capstone202223.controllers;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neltyler.capstone202223.auth.security.services.UserDetailsImpl;
import com.neltyler.capstone202223.auth.security.services.jwt.JwtUtils;
import com.neltyler.capstone202223.payload.request.LoginRequest;
import com.neltyler.capstone202223.repository.RoleRepository;
import com.neltyler.capstone202223.repository.UserRepository;

import java.util.ArrayList;

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
    void testAuthenticateUser() throws Exception {
        when(jwtUtils.generateJwtToken((Authentication) any())).thenReturn("ABC123");
        when(authenticationManager.authenticate((Authentication) any())).thenReturn(new TestingAuthenticationToken(
                new UserDetailsImpl(123L, "janedoe", "jane.doe@example.org", "iloveyou", new ArrayList<>()), "Credentials"));

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setPassword("iloveyou");
        loginRequest.setUsername("janedoe");
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
                                "{\"id\":123,\"username\":\"janedoe\",\"email\":\"jane.doe@example.org\",\"roles\":[],\"tokenType\":\"Bearer\",\"accessToken"
                                        + "\":\"ABC123\"}"));
    }

    /**
     * Method under test: {@link AuthController#authenticateUser(LoginRequest)}
     */
    @Test
    void testAuthenticateUser2() throws Exception {
        when(jwtUtils.generateJwtToken((Authentication) any())).thenReturn("ABC123");
        when(authenticationManager.authenticate((Authentication) any()))
                .thenReturn(new TestingAuthenticationToken("Principal", "Credentials"));

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setPassword("");
        loginRequest.setUsername("janedoe");
        String content = (new ObjectMapper()).writeValueAsString(loginRequest);
        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/auth/signin")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);
        ResultActions actualPerformResult = MockMvcBuilders.standaloneSetup(authController)
                .build()
                .perform(requestBuilder);
        actualPerformResult.andExpect(MockMvcResultMatchers.status().is(400));
    }
}

