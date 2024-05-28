import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
  background_image: string;
  ratings: [{}];
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
