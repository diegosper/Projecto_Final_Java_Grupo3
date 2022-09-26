package com.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Table (name = "words")
@Data
public class Word {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	
	@Column(name = "word_id") 
	private Long id;
	
	@Column(name = "word")
	private String word;

	@Column(name = "category_id")
	private Long category;
	
	@Column (name = "question")
	private String question;

	@Column (name = "letter")
	private String letter;

	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public Long getCategory() {
		return category;
	}

	public void setCategory(Long category) {
		this.category = category;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getLetter() {
		return letter;
	}

	public void setLetter(String letter) {
		this.letter = letter;
	}

	@Override
	public String toString() {
		return "Word [id=" + id + ", word=" + word + ", category=" + category + ", question=" + question + ", letter="
				+ letter + "]";
	}
	
	
}
