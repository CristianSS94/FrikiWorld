interface INameURL {
  name: string;
  url: string;
}

interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: INameURL;
  location: INameURL;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterDTO {
  info: IInfo;
  results: ICharacter[];
}

