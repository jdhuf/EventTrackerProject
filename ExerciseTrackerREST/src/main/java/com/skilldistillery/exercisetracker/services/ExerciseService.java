package com.skilldistillery.exercisetracker.services;

import java.util.List;

import com.skilldistillery.exercisetracker.entities.Exercise;

public interface ExerciseService {

	List<Exercise> index();

	Exercise findOneExerciseById(int id);

	Exercise addNewExercise(Exercise exercise);

	Exercise updateExercise(Exercise exercise);

	Boolean deleteExercise(int id);

}
