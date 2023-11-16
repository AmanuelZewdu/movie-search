import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movie-search';
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) {}

  searchMovies = () => {
    const url = `https://www.omdbapi.com/?s=${this.searchTerm}&apiKey=e6feef72`;

    this.http.get(url).subscribe((data: any) => {
      this.searchResults = data.Search.slice(0, 3);
    });
  };

  redirectMovieURL = (imdbID: string) => {
    const movieURL = `https://www.imdb.com/title/${imdbID}`;
    window.open(movieURL, '_blank');
  };
}
