package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.User;
import com.project.services.UserService;

@RestController
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userService.getUsers();
	}
	
	@CrossOrigin(origins = "*", maxAge = 3600)
	@PostMapping("/users/add")
	public String addUser(@RequestBody User user) {
		System.out.println(user.toString());
		
		return userService.addUser(user);
	}
}
