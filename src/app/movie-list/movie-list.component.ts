import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Remote } from '../remote';
import { IAppState } from '../store';
import { REJECT_MOVIE, ACCEPT_MOVIE } from '../actions';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @select() movies;

  constructor(
    private http: Remote,
    private ngRedux:NgRedux<IAppState>
  ){}

  ngOnInit() {
  }

}
