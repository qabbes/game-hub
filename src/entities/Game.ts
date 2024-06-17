import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
  background_image: string;
  rating_top: number;
  description_raw: string;
  background_image_additional: string;
  website: string;
  genres: Genre[];
  publishers: Publisher[];
}
