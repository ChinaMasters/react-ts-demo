import { DECREMENT, INCREMENT } from "../const";
import { Dispatch } from "redux";

export interface Action {
  type: string;
  count: number;
}

// 增加 state 次数的方法
export const increment = (count: number): Action => ({
  type: INCREMENT,
  count,
});

// 减少 state 次数的方法
export const decrement = (count: number): Action => ({
  type: DECREMENT,
  count,
});

// 异步调用 action
export const incrementAsync = (count: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment(count));
    }, 1000);
  };
};
