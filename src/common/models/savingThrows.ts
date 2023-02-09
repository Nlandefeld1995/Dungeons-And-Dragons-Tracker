import { ModifierTypes } from "./modifier";

export interface SavingThrows {
  [key: string]: SavingThrow;
}
export interface SavingThrow {
  proficient?: boolean;
  id: string;
}

export const formatSavingThrows = () => {
  let savingThrowList: SavingThrows = {};
  for (const sav in ModifierTypes) {
    if (isNaN(Number(sav))) {
      savingThrowList[sav] = {
        proficient: false,
        id: sav,
      };
    }
  }
  return savingThrowList;
};
