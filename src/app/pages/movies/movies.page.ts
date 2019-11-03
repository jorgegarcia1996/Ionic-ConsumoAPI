import { Component, OnInit } from '@angular/core';
import { MovieService, SearchType } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.searchChanged();
  }

  searchChanged() {
    this.results = this.service.searchByTitle(this.searchTerm, this.type);
  }

}
