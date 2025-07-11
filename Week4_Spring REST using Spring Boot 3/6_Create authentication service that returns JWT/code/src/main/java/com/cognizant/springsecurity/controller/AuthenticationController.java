package com.cognizant.springsecurity.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(
            "this_is_a_secure_key_with_32_bytes_or_more!".getBytes()
    );

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate() {
        LOGGER.info("Authenticate endpoint called");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 15 * 60 * 1000)) // 15 minutes
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("JWT token generated for user: {}", username);
        return ResponseEntity.ok(response);
    }
}
