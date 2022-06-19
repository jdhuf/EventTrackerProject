import { ExerciseService } from './../../services/exercise.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

exercises: Exercise [] = [];

  constructor(private exeriseServ: ExerciseService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.exeriseServ.index().subscribe({
      next: (exercises) => {
        this.exercises = exercises;

      },
      error: (fail) => {
        console.error('ExerciseComponent.loadExercises(): error loading exercises: ');
      console.error(fail);

      }

    })
  }

}
