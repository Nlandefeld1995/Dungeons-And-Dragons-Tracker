import { ModifierTypes } from "./modifier";

export interface Abilities  {
  [key :string]: Ability;
};
export interface Ability {
  label: string;
  proficient?: boolean;
  id: string;
  category: ModifierTypes;
}



export const abilities:{label: string, category: ModifierTypes}[] = [
  {label: "Acrobatics", category: ModifierTypes.DEX},
  {label: "AnimalHandling", category: ModifierTypes.WIS},
  {label: "Arcana", category: ModifierTypes.INT},
  {label: "Athletics", category: ModifierTypes.STR},
  {label: "Deception", category: ModifierTypes.CHA},
  {label: "History", category: ModifierTypes.INT},
  {label: "Insight", category: ModifierTypes.WIS},
  {label: "Intimidation", category: ModifierTypes.CHA},
  {label: "Investigation", category: ModifierTypes.INT},
  {label: "Medicine", category: ModifierTypes.WIS},
  {label: "Nature", category: ModifierTypes.INT},
  {label: "Perception", category: ModifierTypes.WIS},
  {label: "Performance", category: ModifierTypes.CHA},
  {label: "Persuasion", category: ModifierTypes.CHA},
  {label: "Religion", category: ModifierTypes.INT},
  {label: "SleightOfHand", category: ModifierTypes.DEX},
  {label: "Stealth", category: ModifierTypes.DEX},
  {label: "Survival", category: ModifierTypes.WIS},
];

export const formatAbilityList = () => {
    let abilityList:Abilities = {};
    abilities.forEach(
      (abil) =>
        (abilityList[abil.label] = { label: abil.label, category: abil.category, proficient: false, id: abil.label })
    );
    return abilityList;
}
