import * as React from "react";

import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";
import { DungeonsDragonsTracker } from "./DungeonsDragonsTracker";

function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to='/newCharacter'/>} />
        <Route exact path='/newCharacter' element={<DungeonsDragonsTracker />} />
        <Route exact path='/:id' element={<>Redirect to specific character. IF logged in. Probably check if character exists in list of available characters from store. Store will hold current user and if they are logged in</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
