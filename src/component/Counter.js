import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  IN_BY_VAL_ACTION,
} from "../redux/actions/CounterActions";
import { DECREMENT, INCREMENT } from "../redux/actions/types";

const Counter = () => {
  const state = useSelector((state) => state.Num.count);
  const dispatch = useDispatch();
  const increas = () => {
    incrementAction(dispatch);
  };
  const decreas = () => {
    decrementAction(dispatch);
  };
  const incFIVE = (v1) => {
    IN_BY_VAL_ACTION(v1, dispatch);
  };
  return (
    <div>
      <p>{state}</p>
      <button onClick={increas}>increment</button>
      <button onClick={decreas}>decrement</button>
      <button onClick={() => incFIVE(3)}>FIVE</button>
    </div>
  );
};

export default Counter;
