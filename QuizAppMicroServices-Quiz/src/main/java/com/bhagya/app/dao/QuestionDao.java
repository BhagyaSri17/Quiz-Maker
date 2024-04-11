package com.bhagya.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bhagya.app.model.Question;

public interface QuestionDao extends JpaRepository<Question,Integer> {
     List<Question>  findByCategory(String category);


  @Query(value="SELECT q.id FROM Question q WHERE q.category=:category ORDER BY RAND() LIMIT :numQ")
  List<Integer> findRandomQuestionsByCategory(@Param("category") String category, @Param("numQ") int numQ);
}
