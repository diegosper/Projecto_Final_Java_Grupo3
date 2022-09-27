package com.project.controllers;

import java.util.List;

import javax.persistence.Convert;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.User;
import com.project.services.UserService;

@CrossOrigin
@RestController
public class UserController {
	@Autowired(required = false)
	UserService userService;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		List<User> usuarios = userService.getUsers();
		
		for (User user : usuarios) {
			System.out.println(user.toString());
		}
		
		return userService.getUsers();
	}
	
	@CrossOrigin(origins = "*", maxAge = 3600)
	@PostMapping("/users/add")
	public String addUser(@RequestBody User user) {
		System.out.println(user.toString());
		
		return userService.addUser(user);
	}
	
	@GetMapping ("/users/get")
	public User getUser(@RequestParam String username, String password) {
		
		return userService.getUserByUsername(username, password);
	}
	
	@DeleteMapping("/users/delete")
	public String deleteUser(@RequestParam Long id){
		userService.deleteUser(id);

		return ""+id+"";
	}
	
	
	
	
}
