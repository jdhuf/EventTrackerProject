
package com.skilldistillery.exercisetracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.exercisetracker.entities.Exercise;
import com.skilldistillery.exercisetracker.repositories.ExerciseRepository;

@Service
public class ExerciseServiceImpl implements ExerciseService {

	@Autowired
	ExerciseRepository er;

	@Override
	public List<Exercise> index() {

		return er.findAll();
	}

	@Override
	public Exercise findOneExerciseById(int id) {

		Optional<Exercise> optExercise = er.findById(id);
		if (optExercise.isPresent()) {
			Exercise exercise = optExercise.get();
			return exercise;
		}
		return null;
	}

	@Override
	public Exercise addNewExercise(Exercise exercise) {

		return er.saveAndFlush(exercise);
	}

	@Override
	public Exercise updateExercise(Exercise exercise) {
		exercise = er.saveAndFlush(exercise);
		return exercise;
	}

	@Override
	public Boolean deleteExercise(int id) {
		er.deleteById(id);
		boolean deleted = !er.existsById(id);
		return deleted;
	}

}
