export interface Modifiers {
    [key: string]: Modifier
  }
  export interface Modifier {
    label: string;
      total: number;
      id: string;
  }