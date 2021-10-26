import { combineReducers } from "redux";
import { DECREMENT, INCREMENT } from "../const";
import { Action } from "../actions";

// 处理并返回 state
export const count = (state = 0, action: any): number => {
  switch (action.type) {
    case INCREMENT:
      console.log("count trigger");
      return state + action.count;
    case DECREMENT:
      return state - action.count;
    default:
      return state;
  }
};

export const test = (state = 10, action: any): number => {
  switch (action.type) {
    case INCREMENT:
      console.log("test trigger");
      return state + action.count;
    case DECREMENT:
      return state - action.count;
    default:
      return state;
  }
};

export default combineReducers({
  count,
  test,
});
