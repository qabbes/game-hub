import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { GameDetails } from "../entities/GameDetails";

const apiClient = new APIClient<GameDetails>("/games");

const useGame = (slug: string) =>
  useQuery({
    //everytime the "slug" changes the query gets rexecuted
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
