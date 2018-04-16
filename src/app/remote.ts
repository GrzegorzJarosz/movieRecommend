import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IMovie } from './movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Remote{

 private movieUrl = 'api/movies';  // URL to web api

 constructor(private http: HttpClient) { }

  loadMovies():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.movieUrl)
  }
  updateMovie(id, typeVal, movie){
  console.log(`${this.movieUrl}/${id}/${typeVal}`)
  return this.http.put(`${this.movieUrl}/${id}/${typeVal}`, movie,  httpOptions);
}

}
