import { ITmdbMovie } from './itmdb-movie';
import { ITmdbTv } from './itmdb-tv';
import { ITmdbPerson } from './itmdb-person';

export interface ITmdbRespone<T> {
  page?: number;
  results?: T[];
  total_pages?: number;
  total_results?: number;
}
