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
}

export interface Modifiers {
  [key: string]: Modifier
}
export interface Modifier {
  label: string;
    total: number;
    id: string;
}

export const defaultCharacter: Character = {
  modifiers: {
    str: {
      label: "Strength",
      total: 0,
      id: "str"
    }
  }
}
