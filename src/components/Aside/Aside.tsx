import React, { useState } from "react";
import GenreList from "../GenreList/GenreList";
import { Genre } from "../../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const Aside = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <GenreList
      selectedGenre={selectedGenre}
      onSelectGenre={onSelectGenre}
    ></GenreList>
  );
};

export default Aside;
