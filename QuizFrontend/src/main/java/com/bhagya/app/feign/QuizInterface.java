package com.bhagya.app.feign;

import java.util.ArrayList;
import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.bhagya.app.model.Question;
import com.bhagya.app.model.QuestionWrapper;
import com.bhagya.app.model.Response;

@FeignClient("QUIZAPPMICROSERVICES")
public interface QuizInterface {
	@GetMapping("question/generate")
	public ResponseEntity<List<Integer>>getQuestionForQuiz(@RequestParam String category,@RequestParam Integer numQ);
	
	@PostMapping("question/getQuestions")
	public ResponseEntity<List<QuestionWrapper>>getQUestionsFromId(@RequestBody List<Integer>questionIds);
	@PostMapping("question/getScore")
	public ResponseEntity<Integer>getScore(@RequestBody List<Response>responses);
}
