package com.bhagya.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class QuizAppMicroServicesQuizApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizAppMicroServicesQuizApplication.class, args);
	}

}
