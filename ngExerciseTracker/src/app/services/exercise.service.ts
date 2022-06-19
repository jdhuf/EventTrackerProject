import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {


private url = environment.baseUrl + 'api/exercise';


  constructor(
    private http:HttpClient) { }

  // Show All------------------------------------------------------

  index(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(() => new Error('error adding exercise: ' + err));
      })
    );
  }

  // Update One------------------------------------------------------

  update(exercise: Exercise): Observable<Exercise> {

    return this.http.put<Exercise>(this.url + '/' + exercise.id, exercise).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.update(): error updating todo: ' + err)
        );
      })
    );

  }

// Show One By Id--------------------------------------------------

showExerciseById(id: number): Observable<Exercise> {
  return this.http.get<Exercise>(this.url + '/' + id).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('ExerciseService.show(): error showing exercise: ' + err)
      );
    })
  );

}

// Create One--------------------------------------------------------

create(exercise: Exercise) {


  console.log(exercise);

return this.http.post<Exercise>(this.url, exercise).pipe(
  catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('TodoService.create(): error creating todo: ' + err)
    );
  })
);
}

// Destroy One----------------------------------------------------------

destroy(id: number): Observable<void> {
  return this.http.delete<void>(this.url +'/'+ id).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('TodoService.index(): error deleting exercise: ' + err)
      );
    })
  );
}

}
