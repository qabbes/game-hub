import React from "react";
import useGameScreenshots from "../hooks/useGameScreenShots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.results.map((img) => (
        <Image key={img.id} src={getCroppedImageUrl(img.image)} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
