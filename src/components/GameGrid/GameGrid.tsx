import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardContainer from "../GameCard/GameCardContainer";
import GameCardSkeleton from "../GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" spacing={5} padding={"10px"}>
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
  );
};

export default GameGrid;
