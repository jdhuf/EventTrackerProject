package com.skilldistillery.exercisetracker.services;

import java.util.List;

import com.skilldistillery.exercisetracker.entities.Exercise;

public interface ExerciseService {
	
	List<Exercise> index();
	
	Exercise findOneExerciseById(int id);
	
	public Exercise addNewExercise(Exercise exercise);
	
	public Exercise updateExercise(Exercise exercise);
	
	public boolean deleteExercise(int id);
}
