import { Component, OnInit, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Remote } from '../remote';
import { IAppState } from '../store';
import { REJECT_MOVIE, ACCEPT_MOVIE } from '../actions';
import { IMovie } from '../movie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @select() movies;
  @Input() movie;

  constructor(
    private http: Remote,
    private ngRedux:NgRedux<IAppState>
  ){}

  ngOnInit() {
  }

  onReject(movie){
  this.ngRedux.dispatch({type:REJECT_MOVIE, movie: movie})
  this.http.updateMovie(movie.id, 'reject', movie)
}

onAccept(movie){
  this.ngRedux.dispatch({type:ACCEPT_MOVIE, movie: movie})
  this.http.updateMovie(movie.id, 'accept', movie)
}

}
