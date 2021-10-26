import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { decrement, increment, incrementAsync } from "./actions";

const Collection = () => {
  // @ts-ignore
  const num = useSelector((state) => state.test);
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(decrement(1))}>{num}</Button>
    </div>
  );
};

export default Collection;
