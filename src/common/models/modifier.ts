
export interface Modifiers {
  [key: string]: Modifier;
}

export interface Modifier {
  label: string;
  total: number;
  id: ModifierTypes;
}

export enum ModifierTypes{
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA
}

export const modifierList: {label: string, type: ModifierTypes}[] = [
  {label:"Strength", type: ModifierTypes.STR}, 
  {label:"Dexterity", type: ModifierTypes.DEX}, 
  {label:"Constitution", type: ModifierTypes.CON}, 
  {label:"Intelligence", type: ModifierTypes.INT}, 
  {label:"Wisdom", type: ModifierTypes.WIS}, 
  {label:"Charisma", type: ModifierTypes.CHA}
]

export const formatModifierList = () => {
  let newModifierList:Modifiers = {}
  modifierList.forEach(mod =>{
    newModifierList[mod.type] = {label: mod.label, total:0, id: mod.type}
  })
  return newModifierList
}
