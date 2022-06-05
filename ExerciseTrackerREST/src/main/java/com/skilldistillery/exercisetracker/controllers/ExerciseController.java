package com.skilldistillery.exercisetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("exercise/{id}")
	public Exercise listExerciseById(@PathVariable int id){
		return es.findOneExerciseById(id);
	}
	
	@PostMapping("exercise")
	public Exercise addNewExercise(
			
			@RequestBody Exercise exercise, 
			HttpServletRequest req, 
			HttpServletResponse res) {
		
		try {
			exercise = es.addNewExercise(exercise);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(exercise.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			
			e.printStackTrace();
			res.setStatus(400);
			exercise = null;
		}
		return exercise;
	}
		
	

}
