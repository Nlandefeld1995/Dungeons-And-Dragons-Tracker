import * as React from "react";
import { StoreView } from "./common/redux/globalStore";
import { useSelector } from "./common/redux/reduxHooks";
import { CreateCharacter } from "./mainComponents/CreateCharacter/CreateCharacter";
import { CreateAccount } from "./mainComponents/CreateScreen/CreateAccount";
import { CreateScreen } from "./mainComponents/CreateScreen/CreateScreen";
import { MainScreen } from "./mainComponents/MainScreen/MainScreen";
import { TitleBar } from "./mainComponents/titleBar/TitleBar";

function App() {
  const appView = useSelector(StoreView);
  return (
    <div className="body">
      <TitleBar />
      {appView === "home" && <CreateScreen />}
      {appView === "main" && <MainScreen />}
      {appView === "newAccount" && <CreateAccount />}
      {appView === "createCharacter" && <CreateCharacter />}
    </div>
  );
}

export default App;
