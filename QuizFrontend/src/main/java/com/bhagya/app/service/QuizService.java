package com.bhagya.app.service;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bhagya.app.dao.QuizDao;
import com.bhagya.app.feign.QuizInterface;
import com.bhagya.app.model.Question;
import com.bhagya.app.model.QuestionWrapper;
import com.bhagya.app.model.Quiz;
import com.bhagya.app.model.Response;

@Service
public class QuizService {
	@Autowired
	QuizDao quizDao;
	@Autowired
	QuizInterface quizInterface;

	public ResponseEntity<Integer> createQuiz(String category, int numQ, String title) {
		// TODO Auto-generated method stub
	List<Integer>questions=quizInterface.getQuestionForQuiz(category,numQ).getBody();
		Quiz quiz=new Quiz(title,questions);
	
		quizDao.save(quiz);
		int id = quiz.id;
		return new ResponseEntity<>(id,HttpStatus.CREATED);
	}

	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
		// TODO Auto-generated method stub
	Optional<Quiz> quiz=quizDao.findById(id);
	List<Integer>questionIds=quiz.get().questionsIds;
	
	ResponseEntity<List<QuestionWrapper>>questions=quizInterface.getQUestionsFromId(questionIds);
	
		return questions;
	}
   
	public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
		ResponseEntity<Integer> right=quizInterface.getScore(responses);
		return right;
	}
}

