import { ISharedState, sharedInitState } from "./stateModels/shared";
import { SET_APP_LOADING, SET_COUNTER } from "../actions/shared";

export const sharedReducer = (
  state: ISharedState = sharedInitState,
  action: any
) => {
  switch (action.type) {
    case SET_COUNTER:
      // alert("count" + action.counter);
      return {
        ...state,
        counter: ++state.counter,
      };
    case SET_APP_LOADING:
      return {
        ...state,
        loading: action.state,
      };
    default:
      return {
        ...state,
      };
  }
};
