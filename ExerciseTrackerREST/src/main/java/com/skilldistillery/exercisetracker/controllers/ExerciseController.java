package com.skilldistillery.exercisetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public Exercise listExerciseById(@PathVariable int id, HttpServletResponse res){
		if (es.findOneExerciseById(id) == null) {
			res.setStatus(404);
		} else {
		
		return es.findOneExerciseById(id);
		}
		return null;
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
		
	@PutMapping("exercise/{id}")
	public Exercise updateExercise(@RequestBody Exercise exercise, HttpServletResponse res) {
		if (exercise == null) {
			res.setStatus(404);
		} else {
			exercise = es.updateExercise(exercise);
		}
		return exercise;
	}
	
	@DeleteMapping("exercise/{id}")
	public void deleteFilm(@PathVariable int id, HttpServletResponse res) {
		try{
			if(es.deleteExercise(id)){
				res.setStatus(204);
			}else {
				res.setStatus(404);
			}
		}catch(Exception e) {
			res.setStatus(400);
		}
		
		
	}

}
