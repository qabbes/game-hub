import { Genre } from "../../hooks/useGenres";
import GenreList from "../GenreList/GenreList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const Aside = ({ onSelectGenre, selectedGenre }: Props) => {
  return <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre}></GenreList>;
};

export default Aside;
