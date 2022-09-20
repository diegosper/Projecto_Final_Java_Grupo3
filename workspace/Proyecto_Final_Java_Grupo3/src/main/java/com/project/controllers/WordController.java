package com.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.entities.Word;
import com.project.services.WordService;

@RestController
@RequestMapping(value = "/api")
public class WordController {
	@Autowired(required = false)
	WordService WordService;

	@RequestMapping(value = "/getWords", method = RequestMethod.GET)
	public List<Word> getWords() {
		return WordService.getWords();
	}
	
	@RequestMapping(value = "/getRandomWord", method = RequestMethod.GET)
	public String getRandomWord() {
		return WordService.getRandomWord("a");
	}
}
