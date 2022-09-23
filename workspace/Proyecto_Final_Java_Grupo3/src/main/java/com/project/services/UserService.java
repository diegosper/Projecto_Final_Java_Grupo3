package com.project.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entities.User;
import com.project.entities.Dtos.UserDto;
import com.project.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	public List<UserDto> getUsersDto(){
		List<User> users = userRepository.findAll();
		List<UserDto> usersDto = new ArrayList<UserDto>();
		UserDto userDto = new UserDto();
		
		for (User user : users) {
			userDto.setUsername(user.getUsername());
			userDto.setEmail(user.getEmail());
			usersDto.add(userDto);
		}
		
		return usersDto;
	}
	
	public void addUser(User user) {
		if (user != null) {
			userRepository.save(user);
		}
	}

	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
		
	}
	
}
