package com.project.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.*;
import com.project.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;


//Como para todos los métodos voy a utiilziar @Controller + @ResponseBody,
//puedo utilizar RestController únicamente

@RestController
@RequestMapping (value = "/api")
public class UserController {
	@Autowired(required = false)
	UserService userService;
	
	@RequestMapping(value = "/users")
	public List<User> getUsers(){
		
		return userService.getUsers();
	}
	
	
}



//
//CODIGO VIEJO
//
//@RestController
//@RequestMapping("/api")
//public class UserController {
//
//	
//	//CONEXION A LA BBDD
//	/*
//	 * Inyectamos el JdbcTemplate mediante la anotación Autowired (por medio de las dependencias)
//	 * 
//	 * IMPORTANTÍSIMO EL AUTOWIRED
//	 */
//	@Autowired
//	private JdbcTemplate jdbcTemplate; 
//	
//	public final String QUERY_OBTENER_USUARIOS = "SELECT * FROM users;";
//	
//	
//	@RequestMapping(value = "/db_test", method = RequestMethod.GET)
//	public ResponseEntity<List<User>> mostrarUsarios(){
//		//Declaración de constante con la QUERY que obtendrá a todos los usuarios
//		final String QUERY_OBTENER_USUARIOS = "SELECT * FROM users;";
//		
//		//Se guarda el resultado de la QUERY
//		List<Map<String, Object>> resultados = jdbcTemplate.queryForList(QUERY_OBTENER_USUARIOS);
//		
//		//Se crea una lista de usuarios de tipo List<String> para devolver el resultado obtenido
//		List<User> usuarios = new ArrayList<User>();
//		
//		Long id;
//		String username, password, email;
//		
//		//Recorriendo los resultados
//		for (Map<String, Object> db_row : resultados) {
//			
//			id = (Long) db_row.get("user_id");
//			username = (String) db_row.get("username");
//			password = (String) db_row.get("password");
//			email = (String) db_row.get("email");
//			
//			System.out.println(id + " " + username + " " + password + " " + email);
//			
//			usuarios.add(new User(id, username, password, email));
//			
//		}
//		
//		//Devuelve el listado de usuarios
//		return new ResponseEntity<>(usuarios, HttpStatus.OK);		
//		
//	}
//	
//	
//	
//
//}
