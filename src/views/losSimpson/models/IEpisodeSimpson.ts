export interface IEpisodeSimpson {
  season: number;
  episode: number;
  name: string;
  rating: number;
  description: string;
  airDate: string;
  thumbnailUrl: string;
  id: number;
}

export type TEpisodeSimpsonDTO = IEpisodeSimpson[];
