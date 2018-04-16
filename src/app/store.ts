import { IMovie, Titles } from './movie';
import { LOAD_MOVIES, REJECT_MOVIE, ACCEPT_MOVIE } from './actions';


export interface IAppState{
  movies: IMovie[];
  acceptedMovies: Titles[];
}

export const INITIAL_STATE: IAppState ={
  movies:[],
  acceptedMovies:[]
}

export function rootReducer(state, action){
  switch(action.type){
    case LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: state.movies.concat(action.movie),
        acceptedMovies:state.acceptedMovies})

    case REJECT_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies.filter((t,i)=> t.id !== action.movie.id),
        acceptedMovies:state.acceptedMovies})

    case ACCEPT_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies.filter((t,i)=> t.id !== action.movie.id),
        acceptedMovies:state.acceptedMovies.concat({title:action.movie.title})})

  }
  return state;
}
