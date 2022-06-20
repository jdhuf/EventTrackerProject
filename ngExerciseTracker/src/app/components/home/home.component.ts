import { ExerciseService } from './../../services/exercise.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ActivatedRoute, Router } from '@angular/router';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

exercises: Exercise [] = [];
newExercise: Exercise = new Exercise();
editExercise: null | Exercise = null;



title = "Amazing Exercise Tracker";
selected: null | Exercise = null;


  constructor(
    private exerciseServ: ExerciseService,
    private route: ActivatedRoute,
    private router: Router,

    ) { }

  addExercise(newExercise: Exercise) {
        this.exerciseServ.create(newExercise).subscribe({
        next: (newExercise) => {
        this.newExercise = new Exercise();
        this.reload();
        },

        error: (err) => {
        console.error('HomeComponent.addExercise(): error adding exercise: ');
        console.error(err);
        }
      });
    }

    updateExercise(exercise: Exercise) {
      this.exerciseServ.update(exercise).subscribe({
        next: (result) => {

        this.reload();
        this.editExercise = null;
        this.selected = null;
        },

        error: (err) => {
          console.error('HomeComponent.addExercise(): error adding exercise: ');
          console.error(err);
        }
      });
    }

  ngOnInit(): void {
    this.reload();
  }

  deleteExercise(id: number): void {
    this.exerciseServ.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (fail) => {
        console.error('HomeComponent.deleteExercise(): error deleting exercise: ');
        console.error(fail);
      }

    });;


  }

  reload() {
    this.exerciseServ.index().subscribe({
      next: (exercises) => {
        this.exercises = exercises;

      },
      error: (fail) => {
        console.error('ExerciseComponent.loadExercises(): error loading exercises: ');
      console.error(fail);

      }

    })
  }

  getTotalNumExercises() {
    return this.exercises.length;
  }

  getSumDistance(): number {
    let sum = 0;
    for (let i = 0; i < this.exercises.length; i++) {
      sum += this.exercises[i].distance;
    }
    return sum;
  }

  getSumDuration(): number {
    let sum = 0;
    for (let i = 0; i < this.exercises.length; i++) {
      sum += this.exercises[i].duration;
    }
    return sum;
  }

  getSumRepetitions(): number {
    let sum = 0;
    for (let i = 0; i < this.exercises.length; i++) {
      sum += this.exercises[i].repetitions;
    }
    return sum;
  }



  displayExercise(exercise: Exercise) {
    this.selected = exercise;
  }

  displayTable(){
    this.selected = null;
  }

  setEditExercise() {
    this.editExercise = Object.assign({}, this.selected);
  }


}

