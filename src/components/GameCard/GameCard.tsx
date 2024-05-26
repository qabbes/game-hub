import React from "react";
import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import {
  Card,
  Heading,
  CardBody,
  Text,
  Stack,
  Image,
  HStack,
} from "@chakra-ui/react";
import PlatformIconsRender from "./PlatformIconsRender";
import CriticScore from "../CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt="No image found"
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text fontSize="xs">
            <HStack spacing={2} justifyContent="space-between">
              <PlatformIconsRender
                key={game.id}
                parent_platforms={game.parent_platforms}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

{
  /* <ul>
{game.platforms.map((platform) => (
  <li key={platform.id}>{platform.name}</li>
))}
</ul> */
}
