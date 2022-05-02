export interface racesInterface {
    race: string;
    subraces: string[];
    subraceRequired: boolean;
    book: string;
    asi: object;
    size: string;
    speed: number;
    traits: string[];
    darkvision: boolean
    languages: string[];
  }
  
export const Races: racesInterface[] = [
    {
        race: 'Dragonborn',
        subraces: ["Black Dragonborn", "Blue Dragonborn", "Brass Dragonborn", "Bronze Dragonborn", "Copper Dragonborn", "Gold Dragonborn", "Green Dragonborn", "Red Dragonborn", "Silver Dragonborn", "White Dragonborn"],
        subraceRequired: true,
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        race: 'Dwarf',
        subraces: ["Hill Dwarf", "Mountain Dwarf"],
        subraceRequired: true,
        book: "Player's Handbook",
        asi: {constitution: 2},
        size: 'Medium',
        speed: 25,
        traits: ["Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning"],
        darkvision: true,
        languages: ['Common', 'Dwarvish']
    },
    {
        race: 'Elf',
        subraces: ["Dark Elf (Drow)", "High Elf", "Wood Elf"],
        subraceRequired: true,
        book: "Player's Handbook",
        asi: {dexterity: 2},
        size: 'Medium',
        speed: 30,
        traits: ["Keen Senses", "Fey Ancestry", "Trance"],
        darkvision: true,
        languages: ['Common', 'Elvish']
    },
    {
        race: 'Gnome',
        subraces: ["Forest Gnome", "Rock Gnome"],
        subraceRequired: true,
        book: "Player's Handbook",
        asi: {intelligence: 2},
        size: 'Small',
        speed: 25,
        traits: ["Gnome Cunning"],
        darkvision: true,
        languages: ['Common', 'Gnomish']
    },
    {
        race: 'Half-Elf',
        subraces: [],
        subraceRequired: false,
        book: "Player's Handbook",
        asi: {charisma: 2, other1: 1, other2: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Fey Ancestry", "Skill Versatility"],
        darkvision: true,
        languages: ['Common', 'Elvish', 'Other1']
    },
    {
        race: 'Halfling',
        subraces: ["Lightfoot", "Stout"],
        subraceRequired: true,
        book: "Player's Handbook",
        asi: {dexterity: 2},
        size: 'Small',
        speed: 25,
        traits: ["Lucky", "Brave", "Halfling Nimbleness", "Naturally Stealthy (Lightfoot)", "Stout Resilience (Stout)"],
        darkvision: false,
        languages: ['Common', 'Halfling']
    },
    {
        race: 'Half-Orc',
        subraces: [],
        subraceRequired: false,
        book: "Player's Handbook",
        asi: {strength: 2, constitiution: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Menacing", "Relentless Endurance", "Savage Attacks"],
        darkvision: true,
        languages: ['Common', 'Orc']
    },
    {
        race: 'Human',
        subraces: ["Variant Human"],
        subraceRequired: false,
        book: "Player's Handbook",
        asi: {all: 1},
        size: 'Medium',
        speed: 30,
        traits: [],
        darkvision: false,
        languages: ['Common', 'Other1']
    },
    {
        race: 'Tiefling',
        subraces: [],
        subraceRequired: false,
        book: "Player's Handbook",
        asi: {intelligence: 1, charisma: 2},
        size: 'Medium',
        speed: 30,
        traits: ["Hellish Resistance", "Infernal Legacy"],
        darkvision: true,
        languages: ['Common', 'Infernal']
    }
]