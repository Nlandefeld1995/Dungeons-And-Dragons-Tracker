import {
    TypedUseSelectorHook,
    useDispatch as reduxUseDispatch,
    useSelector as reduxUseSelector,
    HandleThunkActionCreator,
  } from "react-redux";
  import State, { Dispatch } from "./state";
  
  export const useDispatch = () => reduxUseDispatch<Dispatch>();
  export const useSelector: TypedUseSelectorHook<State> = reduxUseSelector;
  
  export const useAction = <T extends (...args: any[]) => any>(action: T) => {
    const dispatch: Dispatch = useDispatch();
    const dispatchActions = ((...rest) => {
      return dispatch(action(...rest));
    }) as HandleThunkActionCreator<T>;
    return dispatchActions;
  };
  