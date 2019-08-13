package com.plouton.Mars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MarsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarsApplication.class, args);
	}

	@GetMapping("/")
	public String hello() {
		return "hello world! yep";
	}
}
