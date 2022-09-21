package com.project.services;

import java.util.ArrayList;

import java.util.Iterator;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entities.Word;
import com.project.repository.WordRepository;

@Service
public class WordService {
	@Autowired
	WordRepository wordRepository;

	public List<Word> getWords() {
		return wordRepository.findAll();
	}

	public Word getRandomWord(String letter) {
		List<Word> words = wordRepository.findAll();
		List<Word> wordsWithLetter = new ArrayList<Word>();
		Word palabraElegida = new Word();

		for (Word word : words) {
			if (word.getLetter().equals(letter)) {
				System.out.println(word.toString());
				wordsWithLetter.add(word);
			}
		}

		return wordsWithLetter.get((int) (Math.random() * wordsWithLetter.size()));
	}
	
	public Word getRandomWordByCategory(String letter, Long idCategoria) {
		List<Word> words = wordRepository.findAll();
		List<Word> wordsWithLetter = new ArrayList<Word>();
		
		for (Word word : words) {
			if (word.getLetter().equals(letter) && word.getCategory().equals(idCategoria)) {
				System.out.println(word.toString());
				wordsWithLetter.add(word);
			}
		}
		System.out.println((int) (Math.random() * wordsWithLetter.size()));

		return wordsWithLetter.get((int) (Math.random() * wordsWithLetter.size()));
	}

}
