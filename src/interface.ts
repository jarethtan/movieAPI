export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ListProps {
  list: Movie[] | null;
}

export interface MovieProps {
  details: Movie | null;
  movieList: Movie[];
  index: number;
}

export interface SearchProps {
  searchResult: (result: string) => void;
}

export interface ModalProps {
  modalAction: (action: boolean) => void;
  movieList: Movie[];
  index: number;
}
