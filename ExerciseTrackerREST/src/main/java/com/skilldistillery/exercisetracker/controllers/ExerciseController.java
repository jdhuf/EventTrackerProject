package com.skilldistillery.exercisetracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.exercisetracker.entities.Exercise;
import com.skilldistillery.exercisetracker.services.ExerciseService;

@RequestMapping("api")
@RestController
public class ExerciseController {
	
	@Autowired
	private ExerciseService es;
	
	@GetMapping("exercise")
	public List<Exercise> index(){
		return es.index();
	}

}
