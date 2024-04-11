package com.bhagya.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.bhagya.app.service.QuestionService;

@RestController
@RequestMapping("question")
public class QuestionController {
	@Autowired
	QuestionService questionService;
	@GetMapping("allquestions")
public ResponseEntity<List<Question>>getAllQuestions() {
	return questionService.getAllQuestions();
	}

	@GetMapping("category/{category}")
	public List<Question> getQuestionsByCategory(@PathVariable String category) {
			return questionService. getQuestionsByCategory(category);
		}
	
	@PostMapping("add")
	public String addQuestion(@RequestBody Question question) {
		
		return questionService.addQuestion(question);
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteQuestion(@PathVariable int id) {
		
		return questionService.deleteQuestion(id);
	}
	@GetMapping("generate")
	public ResponseEntity<List<Integer>>getQuestionForQuiz(@RequestParam String category,@RequestParam Integer numQ) {
		return questionService.getQuestionForQuiz(category,numQ);
	}
	
	@PostMapping("getQuestions")
	public ResponseEntity<List<QuestionWrapper>>getQUestionsFromId(@RequestBody List<Integer>questionIds){
		
		return questionService.getQuestionFromId(questionIds);
	}
	@PostMapping("getScore")
	public ResponseEntity<Integer>getScore(@RequestBody List<Response>responses){
		
		return questionService.getScore(responses);
	}
}
