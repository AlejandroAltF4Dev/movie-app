export interface ITmdbMovie {
  original_title?: string;
  poster_path?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  overview?: string;
  release_date?: Date;
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  vote_count?: number;
  original_language?: OriginalLanguage;
  popularity?: number;
  media_type?: MediaType;
}

export enum MediaType {
  Movie = 'movie',
}

export enum OriginalLanguage {
  En = 'en',
}
