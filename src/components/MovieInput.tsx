import React, { ReactElement } from "react";
import { SearchProps } from "../interface";
import classes from "./MovieInput.module.css";

function MovieInput({ searchResult }: SearchProps): ReactElement {
  function onHandleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    searchResult(e.target.value);
  }

  return (
    <div>
      <input
        onChange={(e) => onHandleSearch(e)}
        className={classes.input}
        placeholder="Search Movies..."
      />
    </div>
  );
}

export default MovieInput;
