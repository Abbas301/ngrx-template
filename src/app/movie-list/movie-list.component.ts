import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Movie } from '../Models/movie';
// import { DataService } from '../Service/data.service';
import { MovieState } from '../store/reducers/movie.reducer';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // @Input()
  // movies: Movie[] = [];
  movies$ = this.store.select('movies');
  constructor(
    // private dataService: DataService,
    private readonly store: Store<MovieState>
  ) {}

  ngOnInit(): void {}
}
