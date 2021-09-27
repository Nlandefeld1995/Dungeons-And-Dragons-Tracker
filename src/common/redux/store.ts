import { configureStore } from "@reduxjs/toolkit";
import root from "./root";

var store = configureStore({
  reducer: root,
});

export default store;
