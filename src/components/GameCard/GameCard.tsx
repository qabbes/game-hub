import { Card, CardBody, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore";
import Emoji from "../Emoji";
import PlatformIconsRender from "./PlatformIconsRender";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt="No image found" />
      <CardBody>
        <Stack mt="2" spacing="3">
          <Text fontSize="xs">
            <HStack spacing={2} justifyContent="space-between" marginBottom={3}>
              <PlatformIconsRender key={game.id} parent_platforms={game.parent_platforms} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <HStack spacing={2} justifyContent="space-between">
              <Heading fontSize="lg" size="md">
                {game.name}
              </Heading>
              <Emoji rating={game.rating_top} />
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
