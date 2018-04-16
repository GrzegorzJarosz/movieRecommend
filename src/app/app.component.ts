import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import { NgRedux, select } from '@angular-redux/store';
import { Remote } from './remote';
import { IMovie } from './movie';
import { IAppState } from './store';
import { LOAD_MOVIES } from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  _movies: IMovie[];
  @select() movies;
  noErrors:boolean = true;

  constructor(
    private http: Remote,
    private ngRedux: NgRedux<IAppState>,
    public snackBar: MatSnackBar
  ){}

  ngOnInit(){
    this.http.loadMovies().subscribe((_movies) => {
      this.noErrors = true;
      this._movies = _movies;
      this.ngRedux.dispatch({type:LOAD_MOVIES, movie:this._movies});
    },
    (err) => {
      this.noErrors = false;
      this.snackBar.open(err, '', { duration: 2000 });
    });
  }
}
