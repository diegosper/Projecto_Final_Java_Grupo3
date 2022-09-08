package com.project.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

//Como para todos los métodos voy a utiilziar @Controller + @ResponseBody,
//puedo utilizar RestController únicamente

@Controller
public class HomeController {
	
//	@ResponseBody
//	@RequestMapping("/test")
//	public ObjectNode index() {
//		ObjectMapper mapper = new ObjectMapper();
//		ObjectNode objectNode = mapper.createObjectNode();
//		objectNode.put("key", "value");
//		objectNode.put("foo", "bar");
//		objectNode.put("number", 42);
//		
//		return objectNode;
//		
//	}
	
	@ResponseBody
	@RequestMapping("/test")
	public ResponseEntity<String> responseEntity() {
		final HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		HttpStatus estado = HttpStatus.INTERNAL_SERVER_ERROR;
		if(num = 1) {
			HttpStatus estado = HttpStatus.OK;
		}
		
		ResponseEntity<String> resultado = new ResponseEntity<String>("hola", httpHeaders, estado);
	
		
		
		return resultado;
		
	}
	
	
	
	
	
	

}
