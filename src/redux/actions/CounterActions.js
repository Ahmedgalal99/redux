import { DECREMENT, INCREMENT, IN_BY_VAL } from "./types";

export const incrementAction = async (dispatch) => {
  return dispatch({ type: INCREMENT });
};
export const decrementAction = (dispatch) => {
  return dispatch({ type: DECREMENT });
};
export const IN_BY_VAL_ACTION = (v1, dispatch) => {
  return dispatch({ type: IN_BY_VAL, value: v1 });
};
