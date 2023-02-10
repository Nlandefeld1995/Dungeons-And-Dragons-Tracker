import { ModifierTypes } from "./modifier";

export interface Abilities  {
  [key :string]: Ability;
};
export interface Ability {
  label: string;
  proficient?: boolean;
  id: string;
  category: string;
}



export const abilities:{label: string,id:string; category: string}[] = [
{label: "Acrobatics", id: "Acrobatics", category: ModifierTypes.DEX},
{label: "Animal Handling", id: "AnimalHandling", category: ModifierTypes.WIS},
{label: "Arcana", id: "Arcana", category: ModifierTypes.INT},
{label: "Athletics", id: "Athletics", category: ModifierTypes.STR},
{label: "Deception", id: "Deception", category: ModifierTypes.CHA},
{label: "History", id: "History", category: ModifierTypes.INT},
{label: "Insight", id: "Insight", category: ModifierTypes.WIS},
{label: "Intimidation", id: "Intimidation", category: ModifierTypes.CHA},
{label: "Investigation", id: "Investigation", category: ModifierTypes.INT},
{label: "Medicine", id: "Medicine", category: ModifierTypes.WIS},
{label: "Nature", id: "Nature", category: ModifierTypes.INT},
{label: "Perception", id: "Perception", category: ModifierTypes.WIS},
{label: "Performance", id: "Performance", category: ModifierTypes.CHA},
{label: "Persuasion", id: "Persuasion", category: ModifierTypes.CHA},
{label: "Religion", id: "Religion", category: ModifierTypes.INT},
{label: "Sleight of Hand", id: "SleightOfHand", category: ModifierTypes.DEX},
{label: "Stealth", id: "Stealth", category: ModifierTypes.DEX},
{label: "Survival", id: "Survival", category: ModifierTypes.WIS},
];

export const formatAbilityList = () => {
    let abilityList:Abilities = {};
    abilities.forEach(
      (abil) =>
        (abilityList[abil.id] = { ...abil, proficient: false })
    );
    return abilityList;
}
