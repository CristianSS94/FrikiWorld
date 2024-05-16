export enum EEpisodeSelector {
  S01 = "S01",
  S02 = "S02",
  S03 = "S03",
  S04 = "S04",
  S05 = "S05",
}

export const optionLabelEpisode = (episode: EEpisodeSelector) => {
  switch (episode) {
    case EEpisodeSelector.S01:
      return "Temporada 1";
    case EEpisodeSelector.S02:
      return "Temporada 2";
    case EEpisodeSelector.S03:
      return "Temporada 3";
    case EEpisodeSelector.S04:
      return "Temporada 4";
    case EEpisodeSelector.S05:
      return "Temporada 5";

    default:
      break;
  }
};

export const optionEpisodeSelector = Object.values(EEpisodeSelector).map(
  (elem) => ({
    value: elem,
    label: optionLabelEpisode(elem),
  })
);
