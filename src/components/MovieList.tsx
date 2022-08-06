import { ReactElement } from "react";
import { ListProps } from "../interface";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

function MovieList({ list }: ListProps): ReactElement {
  return (
    <div className={classes.listGrid}>
      {list?.map((movie, i) => (
        <Movie key={movie.imdbID} details={movie} movieList={list} index={i} />
      ))}
    </div>
  );
}

export default MovieList;
