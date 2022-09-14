package com.project.controllers;

import com.project.Usuario;
import java.util.ArrayList;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.project.Test;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;


//Como para todos los métodos voy a utiilziar @Controller + @ResponseBody,
//puedo utilizar RestController únicamente

@RestController
@RequestMapping("/api")
public class HomeController {
	@Operation(
			summary = "Obtener palabra", 
			description = "A partir de que recibe la letra que toca en el juego, selecciona una "
					+ "palabra random (según letra y categoría) y devuelve la descripción de la misma"
			)
	@ApiResponses(
			value = { @ApiResponse(responseCode = "200", description = "OK"),
					@ApiResponse(responseCode = "400", description = "BAD_REQUEST"),
					@ApiResponse(responseCode = "404", description = "NOT_FOUND", 
					content = { @Content(examples = {@ExampleObject(value = "") } )	}
					)
				}
			)
	
// 	ObjectMapper --> FORMAS DE DEVOLVER UN JSON DESDE UN CONTROLLER #1
	
	
	@RequestMapping(value = "/prueba", method = RequestMethod.GET)
	public ObjectNode palabra(@RequestParam(required = false) String letra, String categoria) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode objectNode = mapper.createObjectNode();
		objectNode.put("letra", letra);
		objectNode.put("categoria", categoria);
		objectNode.put("número aleatorio", Test.numeroAleatorio());
		
		return objectNode;
		
	}
		
	
	
//	ResponseEntity --> FORMAS DE DEVOLVER UN JSON DESDE UN CONTROLLER #2
	
	
	@RequestMapping(path = "/test", method = RequestMethod.GET)
	public ResponseEntity<String> getDePrueba() {
		final HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		HttpStatus estado = HttpStatus.INTERNAL_SERVER_ERROR;
		ResponseEntity<String> resultado;
		
		int num = Test.numeroAleatorio();
		if(num == 1) {
			estado = HttpStatus.OK;
		}
		resultado = new ResponseEntity<String>("{\"numero\": \"" + num + "\"}", httpHeaders, estado);
		
		return resultado;
		
	}
	
	//CONEXION A LA BBDD
	/*
	 * Inyectamos el JdbcTemplate mediante la anotación Autowired (por medio de las dependencias)
	 * 
	 * IMPORTANTÍSIMO EL AUTOWIRED
	 */
	@Autowired
	private JdbcTemplate jdbcTemplate; 
	
	@RequestMapping(value = "/db_test", method = RequestMethod.GET)
	public List<String> mostrarUsarios(){
		//Declaración de constante con la QUERY que obtendrá a todos los usuarios
		final String QUERY_OBTENER_USUARIOS = "SELECT * FROM USERS;";
		
		//Se guarda el resultado de la QUERY
		List<Map<String, Object>> resultados = jdbcTemplate.queryForList(QUERY_OBTENER_USUARIOS);
		
		//Se crea una lista de usuarios de tipo List<String> para devolver el resultado obtenido
		List<String> usuarios = new ArrayList<String>();
		
		//Recorriendo los resultados
		for (Map<String, Object> linea : resultados) {
			//Se muestra la fila en formato String
			usuarios.add(linea.toString());
		}
		
		//Devuelve el listado de usuarios
		return usuarios;		
		
	}
	
	
	

}
