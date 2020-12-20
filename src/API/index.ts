import axios from "axios";
import { Movie, DBMovie, Genre, MovieResponse, MovieDetails } from "../types";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

const API = "d1f867f141558abd4dfcd4f09b45f4fc";

const genres: Array<Genre> = [
  { id: 12, name: "Adventure" },
  { id: 14, name: "Fantasy" },
  { id: 16, name: "Animation" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 36, name: "History" },
  { id: 37, name: "Western" },
  { id: 53, name: "Thriller" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 878, name: "Science Fiction" },
  { id: 9648, name: "Mystery" },
  { id: 10402, name: "Music" },
  { id: 10749, name: "Romance" },
  { id: 10751, name: "Family" },
  { id: 10752, name: "War" },
  { id: 10770, name: "TV Movie" },
];

export const latest = async () => {
  try {
    const { data } = await axios.get(`/latest?api_key=${API}&language=en-US`);
    return data;
  } catch (error) {
    console.log(error, error.response);
  }
};

const getImagePath = (path: string) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path: string) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const func = (): Promise<string> => {
  return Promise.resolve<string>("HII");
};

export const getMovies = async (
  pageNumber: number,
  type: string = "now_playing"
): Promise<MovieResponse | any> => {
  try {
    /*
    types -> popular
          -> latest
          -> toprated
          -> upcoming
    */
    const { data } = await axios.get(
      `/${type}?api_key=${API}&language=en-US&page= ${pageNumber}`
    );

    const movies: Array<Movie> = data.results.map(
      ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        genre_ids,
      }: DBMovie) => ({
        key: id,
        title: original_title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
        genres: genre_ids.map((genreId: number): string => {
          const index: number = genres.findIndex(
            (item: Genre) => item.id === genreId
          );
          return genres[index].name;
        }),
      })
    );

    return Promise.resolve<MovieResponse>({
      movies,
      page: data.page,
      total_pages: data.total_pages,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsById = async (
  movieId: number
): Promise<MovieDetails | any> => {
  try {
    const { data } = await axios.get(
      `/${movieId}?api_key=${API}&language=en-US`
    );
    return Promise.resolve<MovieDetails>({
      ...data,
      backdrop_path: getBackdropPath(data.backdrop_path),
      poster_path: getImagePath(data.poster_path),
      genres: data.genres.map((genre: Genre): string => genre.name),
    });
  } catch (error) {
    console.log(error);
  }
};

// key: data.id,
// title: data.original_title,
// poster: getImagePath(data.poster_path),
// backdrop: getBackdropPath(data.backdrop_path),
// rating: data.vote_average,
// description: data.overview,
// releaseDate: data.release_date,

export const getImagesByMovieId = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      `/${movieId}/images?api_key=${API}&language=en-US&include_image_language=en,null`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCreditsById = async (movieId: number) => {
  try {
    const { data } = await axios.get(`/${movieId}/credits?api_key=${API}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecommendationsById = async (movieId: number, page: number) => {
  try {
    const { data } = await axios.get(
      `/${movieId}/recommendations?api_key=${API}&language=en-US&page=${page}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
