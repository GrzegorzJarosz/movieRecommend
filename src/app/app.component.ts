import { Component, OnInit } from '@angular/core';
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

  constructor(
    private http: Remote,
    private ngRedux: NgRedux<IAppState>
  ){}

  ngOnInit(){
    this.http.loadMovies().subscribe((_movies) => {
      this._movies = _movies;
      this.ngRedux.dispatch({type:LOAD_MOVIES, movie:this._movies});
    },(err) => {
      console.log(`error: ${err}`)
    });
  }
}
