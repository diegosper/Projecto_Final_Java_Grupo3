package com.project;

import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ch.qos.logback.classic.Logger;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.*;


@OpenAPIDefinition(info = @Info(title = "API Proyecto Final JAVA - Curso 4",
			version = "0.9",
			description = "API proyecto final del curso Java de Fundación Esplai",
			contact = @Contact(
				name = "Diego, Noe, Jordi, Alejandra",
				email = "mail@dominio.com"
				)
			)
		)

@SpringBootApplication
public class ProyectoFinalJavaGrupo3Application {
	
	private static Logger LOGGER; 

	public static void main(String[] args) {
		SpringApplication.run(ProyectoFinalJavaGrupo3Application.class, args);
		LOGGER = (Logger) LoggerFactory.getLogger(ProyectoFinalJavaGrupo3Application.class);
		
		System.out.println("\nInicio de la app");
		LOGGER.info("La app funciona correctamente");
		 	
	
	}	
	
}
