export interface Character {
    modifiers: {[key:string] :Modifier}
}

export interface Modifier {
    label: string;
    total: number;
    id: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'char'
}

