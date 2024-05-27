import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";
import { Genre } from "../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);

  const skeletons = [1, 2, 3, 4, 5, 6];
  //<SimpleGrid templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
  //<SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        spacing={5}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
