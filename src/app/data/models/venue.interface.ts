import { Band } from './band.interface';

export interface Venue {
  date: Date;
  band: string;
  motto: string;
  description: string;
  vorbands: Array<Band>;
  homepage: string;
}

export interface VenueListResponse {
  events: Array<Venue>;
}

export interface VenueItemResponse {
  event: Venue;
}
