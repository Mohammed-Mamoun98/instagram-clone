import { ISharedState, sharedInitState } from "./stateModels/shared";
import { SET_APP_LOADING } from "../actions/shared";

export const sharedReducer = (
  state: ISharedState = sharedInitState,
  action: any
) => {
  switch (action.type) {
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
