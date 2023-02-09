package dev.ixale.moviereviewservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MovieReviewServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(MovieReviewServiceApplication.class, args);
    }

    @GetMapping("/api/v1/")
    public String apiRoot() {
        return "<div><h2>Welcome</h2><div><form action=\"http://localhost:8080/api/v1/movies\"><input type=\"submit\" value=\"Get Movies\" /></form></div></div>";
    }

}
