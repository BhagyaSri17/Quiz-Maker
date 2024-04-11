package com.bhagya.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class QuizAppMicroServicesServiceRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizAppMicroServicesServiceRegistryApplication.class, args);
	}

}
