export interface DBMovie {
  id: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: string;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
}

export interface Movie {
  key: number;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  description: string;
  releaseDate: string;
  genres: Array<string>;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieResponse {
  movies: Array<Movie>;
  page: number;
  total_pages: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genres: Array<string>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  spoken_languages: Array<{
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
}
