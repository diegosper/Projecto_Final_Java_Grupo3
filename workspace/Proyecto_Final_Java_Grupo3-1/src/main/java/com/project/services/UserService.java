package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entities.User;
import com.project.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	public String addUser(User user) {
		if(user != null) {
			userRepository.save(user);
		}
		return user.toString();
	}
	
}
