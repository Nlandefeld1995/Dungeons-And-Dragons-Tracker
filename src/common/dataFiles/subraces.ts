export interface subracesInterface {
    parentRace: string;
    subrace: string;
    book: string;
    asi: object;
    size: string;
    speed: number;
    traits: string[];
    darkvision: boolean
    languages: string[];
  }
  
export const Subraces: subracesInterface[] = [
    {
        parentRace: 'Dragonborn',
        subrace: "Black Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Acid Breath Weapon", "Acid Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Blue Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Lightning Breath Weapon", "Lightning Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Brass Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Fire Breath Weapon", "Fire Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Bronze Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Lightning Breath Weapon", "Lightning Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Copper Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Acid Breath Weapon", "Acid Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Gold Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Fire Breath Weapon", "Fire Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Green Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Poison Breath Weapon", "Poison Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Red Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Fire Breath Weapon", "Fire Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "Silver Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Cold Breath Weapon", "Cold Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dragonborn',
        subrace: "White Dragonborn",
        book: "Player's Handbook",
        asi: {strength: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Draconic Ancestry", "Cold Breath Weapon", "Cold Damage Resistance"],
        darkvision: false,
        languages: ['Common', 'Draconic']
    },
    {
        parentRace: 'Dwarf',
        subrace: "Hill Dwarf",
        book: "Player's Handbook",
        asi: {constitution: 2, wisdom: 1},
        size: 'Medium',
        speed: 25,
        traits: ["Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning", "Dwarven Toughness"],
        darkvision: true,
        languages: ['Common', 'Dwarvish']
    },
    {
        parentRace: 'Dwarf',
        subrace: "Mountain Dwarf",
        book: "Player's Handbook",
        asi: {strength: 2, constitution: 2},
        size: 'Medium',
        speed: 25,
        traits: ["Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning", "Dwarven Armor Training"],
        darkvision: true,
        languages: ['Common', 'Dwarvish']
    },
    {
        parentRace: 'Elf',
        subrace: "Dark Elf (Drow)",
        book: "Player's Handbook",
        asi: {dexterity: 2, charisma: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Keen Senses", "Fey Ancestry", "Trance", "Superior Darkvision", "Sunlight Sensitivity", "Drow Magic", "Drow Weapon Training"],
        darkvision: true,
        languages: ['Common', 'Elvish']
    },
    {
        parentRace: 'Elf',
        subrace: "High Elf",
        book: "Player's Handbook",
        asi: {dexterity: 2, intelligence: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Cantrip"],
        darkvision: true,
        languages: ['Common', 'Elvish', 'Other1']
    },
    {
        parentRace: 'Elf',
        subrace: "Wood Elf",
        book: "Player's Handbook",
        asi: {dexterity: 2, wisdom: 1},
        size: 'Medium',
        speed: 35,
        traits: ["Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Mask of the Wild"],
        darkvision: true,
        languages: ['Common', 'Elvish']
    },
    {
        parentRace: 'Gnome',
        subrace: "Forest Gnome",
        book: "Player's Handbook",
        asi: {dexterity: 1, intelligence: 2},
        size: 'Small',
        speed: 25,
        traits: ["Gnome Cunning", "Natural Illusionist", "Speak with Small Beasts"],
        darkvision: true,
        languages: ['Common', 'Gnomish']
    },
    {
        parentRace: 'Gnome',
        subrace: "Rock Gnome",
        book: "Player's Handbook",
        asi: {constitution: 1, intelligence: 2},
        size: 'Small',
        speed: 25,
        traits: ["Gnome Cunning", "Artificer's Lore", "Tinker"],
        darkvision: true,
        languages: ['Common', 'Gnomish', 'Undercommon (Deep)']
    },
    {
        parentRace: 'Halfling',
        subrace: "Lightfoot Halfling",
        book: "Player's Handbook",
        asi: {dexterity: 2, charisma: 1},
        size: 'Small',
        speed: 25,
        traits: ["Lucky", "Brave", "Halfling Nimbleness", "Naturally Stealthy"],
        darkvision: false,
        languages: ['Common', 'Halfling']
    },
    {
        parentRace: 'Halfling',
        subrace: "Stout Halfling",
        book: "Player's Handbook",
        asi: {dexterity: 2, constitution: 1},
        size: 'Small',
        speed: 25,
        traits: ["Lucky", "Brave", "Halfling Nimbleness", "Stout Resilience"],
        darkvision: false,
        languages: ['Common', 'Halfling']
    },
    {
        parentRace: 'Human',
        subrace: "Variant",
        book: "Player's Handbook",
        asi: {Other1: 1, Other2: 1},
        size: 'Medium',
        speed: 30,
        traits: ["Skills", "Feat"],
        darkvision: false,
        languages: ['Common', 'Other1']
    }
]