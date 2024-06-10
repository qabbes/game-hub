import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const pform = platforms?.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${pform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} as="h1" size="lg">
      {heading}
    </Heading>
  );
};

export default GameHeading;
