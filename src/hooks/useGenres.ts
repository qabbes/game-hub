import genresData from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;

  image_background: string;
}

const useGenres = () => ({ data: genresData, isLoading: false, error: null });

export default useGenres;
