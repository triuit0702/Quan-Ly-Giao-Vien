package com.nghiahd.authenticationtest.repository.DTO;

public class AuthenticationResponse {

    private final String jwt;
    private final String username;

    public AuthenticationResponse(String jwt,String username) {
        this.jwt = jwt;
        this.username=username;
    }

    public String getJwt() {
        return jwt;
    }
}
