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
	private Long id;
	
	@Column(name = "username") 
	private String username;
	
	@Column(name = "password") 
	private String password;
	
	@Column(name = "email") 
	private String email;
	
	@Column(name = "birth_date") 
	private String birthdate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", birthdate=" + birthdate + "]";
	}
	
	
	
	
	
}



