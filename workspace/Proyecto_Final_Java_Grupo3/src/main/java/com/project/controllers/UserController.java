package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.User;
import com.project.entities.Dtos.UserDto;
import com.project.services.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


//Como para todos los métodos voy a utiilziar @Controller + @ResponseBody,
//puedo utilizar RestController únicamente

@RestController
@RequestMapping (value = "/api")
public class UserController {
	@Autowired(required = false)
	UserService userService;
	
	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public List<User> getUsers() {

		return userService.getUsers();
	}
	
	@RequestMapping(value = "/getUsersDto", method = RequestMethod.GET)
	public List<UserDto> getUsersDto(){
		
		return userService.getUsersDto();
	}
	
	@PostMapping("/userRegistration")
	public String addUser(@Validated @RequestBody User user){
		System.out.println(user.toString());
		String mensaje;
		
		System.out.println(user.toString());
		try {
			userService.addUser(user);
			System.out.println(user.toString());
			mensaje = "Usuario agregado con éxito";
		} catch (Exception e) {
			// TODO: handle exception
			mensaje = "MENSAJE DE ERROR: " + e.getMessage();
		} 
		
		return mensaje;
	}
	
	@RequestMapping(value = "/deleteUser", method = RequestMethod.DELETE)
	public String deleteUser(@RequestParam Long id){
		userService.deleteUser(id);

		return id.toString();
	}
	
	
}
