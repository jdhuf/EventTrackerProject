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


  constructor(private http:HttpClient) { }

  index(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(() => new Error('error adding exercise: ' + err));
      })
    );
  }


}
