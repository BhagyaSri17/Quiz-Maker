package com.bhagya.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bhagya.app.dao.QuestionDao;
import com.bhagya.app.model.Question;
import com.bhagya.app.model.QuestionWrapper;

import com.bhagya.app.model.Response;
@Service
public class QuestionService {
   @Autowired
	QuestionDao questionDao;
public ResponseEntity<List<Question>> getAllQuestions() {
	try {
		return new ResponseEntity<>(questionDao.findAll(),HttpStatus.OK); 
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST); 
}
public List<Question> getQuestionsByCategory(String category) {
	// TODO Auto-generated method stub
	return questionDao.findByCategory(category);
}
public String addQuestion(Question question) {
	// TODO Auto-generated method stub
	questionDao.save(question);
	return "Added Successfully";
}
public String deleteQuestion(int id) {
	// TODO Auto-generated method stub
	questionDao.deleteById(id);
	return " Deleted Successfully";
}
public ResponseEntity<List<Integer>> getQuestionForQuiz(String category, Integer numQ) {
	// TODO Auto-generated method stub
	List<Integer>questions=questionDao.findRandomQuestionsByCategory(category,numQ);
	return new ResponseEntity<>(questions,HttpStatus.OK);
}
public ResponseEntity<List<QuestionWrapper>> getQuestionFromId(List<Integer> questionIds) {
	// TODO Auto-generated method stub
	List<QuestionWrapper>wrappers=new ArrayList<>();
	List<Question>questions=new ArrayList<>();
	for(Integer id:questionIds) {
		questions.add(questionDao.findById(id).get());
	}
	for(Question q:questions) {
		QuestionWrapper wrapper=new QuestionWrapper(q.id,q.questionTitle,q.option1,q.option2,q.option3,q.option4);
		wrappers.add(wrapper);
	}
	return new ResponseEntity<>(wrappers,HttpStatus.OK);
}
public ResponseEntity<Integer> getScore(List<Response> responses) {
	
	int right=0;
	for(Response res:responses) {
		Question question=questionDao.findById(res.id).get();
		if(res.response.equals(question.rightAnswer))
			right++;
		
	}
	return new ResponseEntity<>(right,HttpStatus.OK);
}
	

}
