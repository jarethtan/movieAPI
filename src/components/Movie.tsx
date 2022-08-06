import React, { ReactElement, useState } from "react";
import { MovieProps } from "../interface";
import MovieDetails from "./MovieModal";
import classes from "./Movie.module.css";

function Movie({ details, movieList, index }: MovieProps): ReactElement {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onChangeModalAction = (action: boolean): void => {
    setOpenModal(action);
  };
  return (
    <div className={classes.movieContainer}>
      <img
        alt="movie poster"
        src={details?.Poster === "N/A" ? "./noSearch.png" : details?.Poster}
        className={classes.image}
      />
      <div className={classes.title}>{details?.Title}</div>
      <button
        type="button"
        className={classes.detailButton}
        onClick={() => onChangeModalAction(true)}
      >
        Details
      </button>
      {openModal ? (
        <MovieDetails
          modalAction={onChangeModalAction}
          movieList={movieList}
          index={index}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Movie;
