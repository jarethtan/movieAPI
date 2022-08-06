import React, { useEffect, useState } from "react";
import classes from "./MovieModal.module.css";
import { ModalProps, Movie } from "../interface";

function MovieDetails({ modalAction, movieList, index }: ModalProps) {
  const [count, setCount] = useState<number>(index); // use index of movielist array to find the current movie shown.
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(movieList[count]);

    return () => {};
  }, [count]);

  const decreaseMovie = () => {
    if (count > 0) setCount(count - 1);
  };

  const increaseMovie = (): void => {
    if (count < movieList.length - 1) setCount(count + 1);
  };
  return (
    <div className={classes.background}>
      <div className={classes.table}>
        <button
          type="button"
          onClick={() => modalAction(false)}
          className={classes.closeButton}
        >
          X
        </button>
        <div className={classes.details}>
          <div className={classes.infoContainer}>
            <p className={classes.title}>Movie Details</p>
            <div>Title: {movie?.Title}</div>
            <div>Year: {movie?.Year}</div>
            <div>Type: {movie?.Type}</div>
            <div>IMDB ID: {movie?.imdbID}</div>
            <button
              type="button"
              onClick={increaseMovie}
              className={classes.nextButton}
            >
              &#62;
            </button>
            <button
              type="button"
              onClick={decreaseMovie}
              className={classes.previousButton}
            >
              &#60;
            </button>
          </div>
          <div className={classes.imgContainer}>
            <img
              alt="movie poster"
              src={movie?.Poster === "N/A" ? "./noSearch.png" : movie?.Poster}
              className={classes.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
