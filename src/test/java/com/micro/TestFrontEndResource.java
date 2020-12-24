package com.micro;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class TestFrontEndResource {

    @Test
    public void testGetApps() {
        given()
                .when().get("/api/v1/front-end-apps")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
        ;
    }

}