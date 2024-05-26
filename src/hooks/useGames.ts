import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
