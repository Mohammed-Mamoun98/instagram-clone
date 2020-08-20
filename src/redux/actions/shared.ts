export const SET_APP_LOADING = "SET_APP_LOADING";
export const SET_COUNTER = "SET_COUNTER";

export const setCounter = (counter: number) => ({
  type: SET_COUNTER,
  counter,
});

export const setAppLoading = (state: boolean) => ({
  type: SET_APP_LOADING,
  state,
});
