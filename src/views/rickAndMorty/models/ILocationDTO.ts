interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface ILocationDTO {
  info: IInfo;
  results: ILocation[];
}
