import React, { useState } from "react";
import GenreList from "../GenreList/GenreList";
import { Genre } from "../../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const Aside = ({ onSelectGenre }: Props) => {
  return <GenreList onSelectGenre={onSelectGenre}></GenreList>;
};

export default Aside;
