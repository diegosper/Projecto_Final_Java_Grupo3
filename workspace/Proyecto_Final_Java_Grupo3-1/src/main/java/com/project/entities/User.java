package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table (name = "users")
@Data
public class User {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name = "user_id") 
	private int id;
	
	@Column(name = "username") 
	private String username;
	
	@Column(name = "password") 
	private String password;
	
	@Column(name = "email") 
	private String email;
	
	@Column(name = "birth_date") 
	private String birthdate;
}
