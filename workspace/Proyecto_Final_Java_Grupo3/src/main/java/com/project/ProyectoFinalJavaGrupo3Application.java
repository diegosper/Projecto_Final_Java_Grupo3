package com.project;

import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ch.qos.logback.classic.Logger;

@SpringBootApplication
public class ProyectoFinalJavaGrupo3Application {
	
	private static Logger LOGGER; 

	public static void main(String[] args) {
		SpringApplication.run(ProyectoFinalJavaGrupo3Application.class, args);
		LOGGER = (Logger) LoggerFactory.getLogger(ProyectoFinalJavaGrupo3Application.class);
		
		System.out.println("\nInicio de la app");
		LOGGER.info("La appa funciona correctamente");
		 	
	}
}
