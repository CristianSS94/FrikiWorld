export enum EGenderSelector {
  MALE = "Male",
  FEMALE = "Female",
  UNKNOWN = "unknown",
  GENDERLESS = "Genderless",
}

export const optionLabelGender = (gender: EGenderSelector) => {
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

export const optionGenderSelector = Object.values(EGenderSelector).map(
  (elem) => ({
    value: elem,
    label: optionLabelGender(elem),
  })
);

//--------------------------------------------

export enum EStatusSelector {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export const optionLabelStatus = (status: EStatusSelector) => {
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

export const optionStatusSelector = Object.values(EStatusSelector).map(
  (elem) => ({
    value: elem,
    label: optionLabelStatus(elem),
  })
);
