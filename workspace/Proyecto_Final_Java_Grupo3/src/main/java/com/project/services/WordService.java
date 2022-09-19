package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entities.Word;
import com.project.repository.WordRepository;

@Service
public class WordService {
	@Autowired
	WordRepository wordRepository;
	
	public List<Word> getWords(){
		return wordRepository.findAll();
	}
	
	public String getRandomWord(char letter){
		List<Word> words = wordRepository.findAll();
		
		for (Word word : words) {
			System.out.println(word.toString());
			//System.out.println(word.getWord().startsWith(String.valueOf(letter)));
		}
		
		return null;
	}
	
}
