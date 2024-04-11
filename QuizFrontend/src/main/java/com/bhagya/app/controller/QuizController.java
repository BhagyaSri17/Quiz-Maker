package com.bhagya.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bhagya.app.model.Question;
import com.bhagya.app.model.QuestionWrapper;
import com.bhagya.app.model.Response;
import com.bhagya.app.service.QuizService;

@RestController
@RequestMapping("quiz")

public class QuizController {
	@Autowired
	QuizService quizService;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("create")
	public ResponseEntity<Integer> createQuiz(@RequestParam String category,@RequestParam int numQ,@RequestParam String title)
	{
		return quizService.createQuiz(category,numQ,title);
		
}   @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("get/{id}")
	public ResponseEntity<List<QuestionWrapper>>getQuizQuestions(@PathVariable Integer id){
	return quizService.getQuizQuestions(id);
}   @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("submit/{id}")
	public ResponseEntity<Integer>submitQuiz(@PathVariable Integer id,@RequestBody List<Response>responses){
		return quizService.calculateResult(id,responses);
	}
}
