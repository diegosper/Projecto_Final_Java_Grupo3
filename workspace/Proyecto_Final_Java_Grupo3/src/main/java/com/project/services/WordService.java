package com.project.services;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entities.Word;
import com.project.repository.WordRepository;

@Service
public class WordService {
	@Autowired
	WordRepository WordRepository;
	
	public List<Word> getWords(){
		return WordRepository.findAll();
	}
	
	
}
