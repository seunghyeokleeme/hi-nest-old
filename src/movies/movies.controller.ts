import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
