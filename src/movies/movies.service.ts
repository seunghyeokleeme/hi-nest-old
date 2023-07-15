import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: string): boolean {
    const movie = this.movies.findIndex((movie) => movie.id === +id);
    if (movie === -1) {
      return false;
    }
    this.movies.splice(movie, 1);
    return true;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
