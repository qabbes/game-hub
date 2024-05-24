import React from "react";
import { Game } from "../../hooks/useGames";
import { Card, Heading, CardBody, Text, Stack, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden">
      <Image src={game.background_image} alt="No image found" />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text color="blue.600" fontSize="2xl"></Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
