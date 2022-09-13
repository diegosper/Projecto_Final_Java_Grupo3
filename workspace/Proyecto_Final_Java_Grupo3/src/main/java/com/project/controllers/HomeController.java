package com.project.controllers;

import com.project.*;

import ch.qos.logback.classic.Logger;

import org.apache.commons.logging.Log;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

//import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

//Como para todos los métodos voy a utiilziar @Controller + @ResponseBody,
//puedo utilizar RestController únicamente

@Controller
@RequestMapping("/api")
public class HomeController {
	
	
// 	ObjectMapper --> FORMAS DE DEVOLVER UN JSON DESDE UN CONTROLLER #1
	
	@ResponseBody
	@RequestMapping(value = "/diego", method = RequestMethod.DELETE)
	public ObjectNode index() {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode objectNode = mapper.createObjectNode();
		objectNode.put("key", "value");
		objectNode.put("foo", "bar");
		objectNode.put("number", 42);
		
		return objectNode;
		
	}
		
	
	
//	ResponseEntity --> FORMAS DE DEVOLVER UN JSON DESDE UN CONTROLLER #2
	
	@ResponseBody
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
	
	
	
	
	
	

}
