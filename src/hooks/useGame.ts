import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface GameDetails {
  description_raw: string;
  name: string;
  background_image: string;
  background_image_additional: string;
  website: string;
}

const apiClient = new APIClient<GameDetails>("/games");

const useGame = (slug: string) =>
  useQuery({
    //everytime the "slug" changes the query gets rexecuted
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
