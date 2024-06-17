import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-client";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailers = (gameId: number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailers;
