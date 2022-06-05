import { MediaType } from './itmdb-movie';

export interface ITmdbTv {
  name?: string;
  id?: number;
  original_name?: string;
  origin_country?: string[];
  overview?: string;
  vote_count?: number;
  vote_average?: number;
  poster_path?: string;
  backdrop_path?: string;
  original_language?: string;
  genre_ids?: number[];
  first_air_date?: Date;
  popularity?: number;
  media_type?: MediaType;
}
