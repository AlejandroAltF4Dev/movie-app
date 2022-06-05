export interface ITmdbPerson {
  adult?: boolean;
  also_known_as?: string[];
  biography?: string;
  birthday?: Date;
  deathday?: null;
  gender?: number;
  homepage?: string;
  id?: number;
  imdb_id?: string;
  known_for_department?: string;
  name?: string;
  place_of_birth?: string;
  popularity?: number;
  profile_path?: string;
  credits?: Credits;
  images?: Images;
}

export interface Credits {
  cast?: Cast[];
  crew?: any[];
}

export interface Cast {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: null | string;
  release_date?: Date;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  popularity?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface Images {
  profiles?: Profile[];
}

export interface Profile {
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: null;
  file_path?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}
