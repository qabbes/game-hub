import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import getENdescription from "../services/slice-description";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import EmbeddedVideo from "../components/EmbeddedVideo";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // ! this constant will never be null
  const description = getENdescription(game?.description_raw);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <Box>
          <Heading as="h1">{game?.name}</Heading>
          <ExpandableText children={description} maxChar={300}></ExpandableText>
          <GameAttributes game={game} />
        </Box>
        <Box>
          <EmbeddedVideo gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
