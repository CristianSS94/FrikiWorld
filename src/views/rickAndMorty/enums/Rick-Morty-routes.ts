const baseUrl = "https://rickandmortyapi.com/api/";

export enum ERickMortyRoutes {
  CHARACTER = `${baseUrl}character?page=`,
  EPISODE = `${baseUrl}episode?page=`,
  LOCATION = `${baseUrl}location?page=`,
}
