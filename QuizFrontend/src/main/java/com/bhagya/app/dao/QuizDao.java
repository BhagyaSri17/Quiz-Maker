package com.bhagya.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bhagya.app.model.Quiz;

public interface QuizDao extends JpaRepository<Quiz,Integer>{

}
