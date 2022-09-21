package com.project.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name = "users")
public class User{
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	
	@Column(name = "user_id") 
	private Long id;
	
	@Column(name = "username")
	private String 	username;

	@Column(name = "password")
	private String 	password;
	
	@Column (name = "email")
	private String 	email;
	
	@Column (name = "birth_date")
	private Date birth;
	
	
	public User() {}

	public User (String username, String password, String email, Date birth) {
		//this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.birth = birth;
	}
	
	public String getUsername() {
		return username;
	}
	public String getPassword() {
		return password;
	}
	public void setUsername(String username) {
		this.username = username;
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public Date getBirth() {
		return birth;
	}

	public void setBirth(Date birth) {
		this.birth = birth;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email + ", birth="
				+ birth + "]";
	}
		
}
