import root from "./root";
import store from "./store";

type State = ReturnType<typeof root>;
export type Dispatch = typeof store.dispatch;

export default State;
