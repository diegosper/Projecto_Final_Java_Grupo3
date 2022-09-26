package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Word;
import com.project.services.WordService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


@CrossOrigin
@RestController
//@RequestMapping(value = "/words")
public class WordController {
	@Autowired(required = false)
	WordService WordService;

	@GetMapping("/words")
	public List<Word> getWords() {
		return WordService.getWords();
	}
	
	@GetMapping("/words/random")
	public Word getRandomWord(@RequestParam String letter) {
		return WordService.getRandomWord(letter);
	}
	
	@GetMapping("/words/randombycategoria")
	public Word getRandomWord(@RequestParam String letter, Long idCategory) {
		return WordService.getRandomWordByCategory(letter, idCategory);
	}
}
