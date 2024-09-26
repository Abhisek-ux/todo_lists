import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies: any[] = [];
  filteredMovies: any[] = [];
  sortDirection: string = 'asc';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies('batman');
  }

  getMovies(title: string): void {
    this.movieService.searchMovies(title).subscribe((response) => {
      this.movies = response.Search;
      this.filteredMovies = [...this.movies];
    });
  }

  filterMovies(keyword: string): void {
    this.filteredMovies = this.movies.filter((movie) =>
      movie.Title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  sortMovies(): void {
    this.filteredMovies.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.Title.localeCompare(b.Title);
      } else {
        return b.Title.localeCompare(a.Title);
      }
    });
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
}
