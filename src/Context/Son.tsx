import React from "react";
import { Consumer } from "./index"; //引入父组件的Consumer容器
import { Button, Divider } from "antd";
import Grandson from "./Grandson"; //引入子组件
const Son = () => {
  return (
    <Consumer>
      {(name) => (
        <div>
          <p>子组件。获取父组件的值:{name}</p>
          <Divider></Divider>
          <Grandson />
        </div>
      )}
    </Consumer>
  );
};

export default Son;
