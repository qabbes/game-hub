import React from "react";
import { Game } from "../entities/Game";

import { AspectRatio } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  gameId: number;
}
const EmbeddedVideo = ({ gameId }: Props) => {
  const { data: gameTrailer, isLoading, error } = useGameTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = gameTrailer?.results[0];
  return first ? (
    <AspectRatio maxW="480px" ratio={1}>
      <video
        title={gameTrailer?.results[0].name}
        src={gameTrailer?.results[0].data[480]}
        poster={gameTrailer?.results[0].preview}
        controls
      />
    </AspectRatio>
  ) : null;
};

export default EmbeddedVideo;
