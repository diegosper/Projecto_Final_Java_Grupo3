package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "game")
public class Game {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name = "game_id") 
	private Long id;
}
