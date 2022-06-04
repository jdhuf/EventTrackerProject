
package com.skilldistillery.exercisetracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.exercisetracker.entities.Exercise;
import com.skilldistillery.exercisetracker.repositories.ExerciseRepository;

@Service
public class ExerciseServiceImpl implements ExerciseService{

	@Autowired
	ExerciseRepository er;
	
	@Override
	public List<Exercise> index() {
		
		return er.findAll();
	}

}
