import { DECREMENT, INCREMENT, IN_BY_VAL } from "../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case IN_BY_VAL:
      return { ...state, count: state.count + action.value };
    default:
      return state;
  }
};

export default counterReducer;
