import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  list,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
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
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
