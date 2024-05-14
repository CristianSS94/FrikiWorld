export enum EGenderSelector {
  MALE = "Male",
  FEMALE = "Female",
  UNKNOWN = "unknown",
  GENDERLESS = "Genderless",
}

export const getLabelGender = (gender: EGenderSelector) => {
  switch (gender) {
    case EGenderSelector.MALE:
      return "Masculino";
    case EGenderSelector.FEMALE:
      return "Femenino";
    case EGenderSelector.GENDERLESS:
      return "Sin género";
    case EGenderSelector.UNKNOWN:
      return "Desconocido";
    default:
      break;
  }
};

export const getOptionGenderSelector = Object.values(EGenderSelector).map(
  (elem) => ({
    value: elem,
    label: getLabelGender(elem),
  })
);

//--------------------------------------------

export enum EStatusSelector {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export const getLabelStatus = (status: EStatusSelector) => {
  switch (status) {
    case EStatusSelector.ALIVE:
      return "Vivo";
    case EStatusSelector.UNKNOWN:
      return "Desconocido";
    case EStatusSelector.DEAD:
      return "Fallecido";

    default:
      break;
  }
};

export const getOptionStatusSelector = Object.values(EStatusSelector).map(
  (elem) => ({
    value: elem,
    label: getLabelStatus(elem),
  })
);
