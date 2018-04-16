import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  @select() movies;
  @select() acceptedMovies;

  constructor( private ngRedux:NgRedux<IAppState>) { }


  ngOnInit() {
  }

}
