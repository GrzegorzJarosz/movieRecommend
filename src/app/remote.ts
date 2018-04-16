import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

import { IMovie } from './movie';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Remote{

 private movieUrl = 'api/movies';  // URL to web api

 constructor(private http: HttpClient) { }

 //error handling
 private handleError(error: HttpErrorResponse) {
   if (error.error instanceof ErrorEvent) {
     console.error('An error occurred:', error.error.message);
   } else {
     console.error(
       `Error code ${error.status}, ` +
       `body: ${error.error}`);
   }
   return new ErrorObservable(
     'Something went wrong, please try again later.');
 };

  //load recommendations
  loadMovies():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.movieUrl).pipe(
      catchError(this.handleError)
    );
  }

  //update
  updateMovie(id, typeVal, movie){
  console.log(`${this.movieUrl}/${id}/${typeVal}`)
  return this.http.put(`${this.movieUrl}/${id}/${typeVal}`, movie,  httpOptions);
}

}
