import { Genre } from "../../hooks/useGenres";
import GenreList from "../GenreList/GenreList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const Aside = ({ onSelectGenre, selectedGenreId }: Props) => {
  return (
    <GenreList
      selectedGenreId={selectedGenreId}
      onSelectGenre={onSelectGenre}
    ></GenreList>
  );
};

export default Aside;
