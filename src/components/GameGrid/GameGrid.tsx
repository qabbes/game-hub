import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import { Text, list } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <ul>
        {error && <Text>{error}</Text>}
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
