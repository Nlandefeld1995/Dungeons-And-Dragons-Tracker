import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import State from "./state";
import { Character, defaultCharacter } from "../models";

interface StoreState{
  character: Character
}

const initialState: StoreState =
{
  character: defaultCharacter

}

const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {  
    // Can be used to update any parent property of the character. If we need to update nested object will need to create a separate reducer following same pattern.
    UPDATE_CHARACTER_PROP: (state, {payload} : PayloadAction<{property: keyof Character; value: any}>) =>{
      // keyof Character says that this will be one of the keys of the Character interface
      //@ts-ignore
      state.character[payload.property as keyof Character]  = payload.value
    }

  },
  extraReducers: builder => {}
  
});


export const ACTIONS = {...CharacterSlice.actions};

export const CharacterSelector = (state:State) => state.CharacterSlice.character

export default CharacterSlice.reducer;
