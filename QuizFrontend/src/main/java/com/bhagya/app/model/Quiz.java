package com.bhagya.app.model;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Quiz {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
  public Integer id;
  public String title;
  @ElementCollection
 public List<Integer>questionsIds;
  public Quiz() {
      // No-argument constructor body
  }
	public Quiz(String title, List<Integer> questionsIds) {
		super();
		this.title = title;
		this.questionsIds = questionsIds;
	}

}
