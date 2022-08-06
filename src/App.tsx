import { ReactElement, useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieInput from "./components/MovieInput";
import { Movie } from "./interface";
import classes from "./App.module.css";
import Timer from "./components/Timer";

function App(): ReactElement {
  const [data, setData] = useState<Movie[] | null>(null);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function fetchMovieData() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`,
          {
            signal,
          },
        );
        const results = await res.json();
        if (res.status < 300 && results.Response === "True") {
          setError(null);
          setData(results.Search);
        } else throw new Error(results.Error); // throw error if request from API has an error
      } catch (e) {
        if (e instanceof Error) {
          setData(null);
          setError(null);
          if (search.length > 1) {
            // if search length is less than 2, it will not show error message as message will just be "too much results".
            setError(e.message);
            console.log(e);
          }
        }
      }
    }

    fetchMovieData();

    return () => {
      const timer = setTimeout(() => {
        controller.abort();
      }, 1000);
      clearTimeout(timer);
    };
  }, [search]);

  const searchResult = (result: string): void => {
    setSearch(result);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.subContainer}>
        <div className={classes.timerContainer}>
          <Timer />
        </div>
        <h1 className={classes.mainTitle}>Movie Search</h1>
        {error ? <p className={classes.error}>{error}</p> : ""}
        <div className={classes.center}>
          <MovieInput searchResult={searchResult} />
        </div>
        <div className={classes.center}>
          <MovieList list={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
