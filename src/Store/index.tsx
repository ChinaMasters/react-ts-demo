import { connect } from "react-redux";
import { Divider, Button } from "antd";
import { decrement, increment, incrementAsync } from "./actions";
import Collection from "./Collection";

import { store } from "../index";

// 创建类型接口
export interface IProps {
  value: number;
  onIncrement: (count: number) => void;
  onDecrement: (count: number) => void;
  onIncrementAsync: (count: number) => void;
}

const Counter = (props: IProps) => {
  const { value, onIncrement, onDecrement, onIncrementAsync } = props;
  return (
    <div>
      <h1>count: {value}</h1>
      <Divider></Divider>
      <Button onClick={() => onIncrement(1)}>onIncrement</Button>
      <Divider></Divider>
      <Button
        onClick={() => {
          store.dispatch(decrement(1));
        }}
      >
        onIncrement
      </Button>
      <Divider></Divider>
      <Button onClick={() => onIncrementAsync(3)}>onIncrementAsync</Button>
      <Divider></Divider>
      <Collection></Collection>
    </div>
  );
};

// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: any) => ({
  value: state.test,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  onDecrement: decrement,
  onIncrement: increment,
  onIncrementAsync: incrementAsync,
};

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
