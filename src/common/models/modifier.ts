
export interface Modifiers {
  [key: string]: Modifier;
}

export interface Modifier {
  label: string;
  total: number;
  id: string;
}

export enum ModifierTypes{
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA'
}

export const modifierList: {label: string, id: string}[] = [
  {label:"Strength", id: ModifierTypes.STR}, 
  {label:"Dexterity", id: ModifierTypes.DEX}, 
  {label:"Constitution", id: ModifierTypes.CON}, 
  {label:"Intelligence", id: ModifierTypes.INT}, 
  {label:"Wisdom", id: ModifierTypes.WIS}, 
  {label:"Charisma", id: ModifierTypes.CHA}
]

export const formatModifierList = () => {
  let newModifierList:Modifiers = {}
  modifierList.forEach(mod =>{
    newModifierList[mod.id] = {...mod, total:0}
  })
  return newModifierList
}
