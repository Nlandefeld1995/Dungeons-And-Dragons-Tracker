export interface Modifiers {
    [key: string]: Modifier
  }
  export interface Modifier {
    label: string;
      total: number;
      id: string;
  }

  export const defaultModifiers: Modifiers = {
    str: {
      label: "Strength",
      total: 7,
      id: "str"
    },
    dex: {
      label: "Dexterity",
      total: 6,
      id: "dex"
    }
  }