package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entities.User;
import com.project.entities.Word;
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
	
	public User getUserByUsername(String username, String password) {
		List<User> users = userRepository.findAll();
		int i = 0;
		User user = null;
		String findUsername;
		String findPassword;
		
		while (i < users.size() && user == null) {
			findUsername = users.get(i).getUsername();
			findPassword = users.get(i).getPassword();
			if (findUsername.equals(username) && findPassword.equals(password)) {
				user = users.get(i);
			} else {
				i++;
			}
		}
				
		return user;
	}
	
	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
		
	}
}
