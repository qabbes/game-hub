import genresData from "../data/genres";
import { Game } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  slug: string;

  image_background: string;
}

const useGenres = () => ({ data: genresData, isLoading: false, error: null });

export default useGenres;
