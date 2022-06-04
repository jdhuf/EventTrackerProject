package com.skilldistillery.exercisetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.exercisetracker.entities.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer>{

}
