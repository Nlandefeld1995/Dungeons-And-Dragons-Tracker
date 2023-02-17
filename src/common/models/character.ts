import { Abilities, formatAbilityList } from "./abilities";
import { Modifiers, formatModifierList } from "./modifier";
import { SavingThrows, formatSavingThrows } from "./savingThrows";
// Would like to keep alphabetized to easily find what we are looking for
export interface Character {
  alignment?: string;
  background?: string;
  characterName?: string;
  class?: string;
  hitPointsCurrent?: number;
  hitPointsTemp?: number;
  inspiration?: boolean;
  level?: number;
  playerName?: string;
  race?: string;
  xp?: number;
  modifiers: Modifiers;
  abilities: Abilities;
  savingThrows: SavingThrows;
  proficiencyBonus?: number;
  profArmor?: string[];
  profWeapons?: string[];
  profTools?: string[];
  profLanguages?: string[]
}

export const defaultCharacter: Character = {
  modifiers: formatModifierList(),
  abilities: formatAbilityList(),
  savingThrows: formatSavingThrows()
};
