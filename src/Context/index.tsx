import React, { useState } from "react";
import Son from "./Son";
import { Button, Divider } from "antd";
export const { Provider, Consumer } = React.createContext("");
const Context = () => {
  const [name, setName] = useState("jack");
  const handleChange = () => {
    setName("tom");
  };
  return (
    <Provider value={name}>
      <div>
        <p>父组件定义的值:{name}</p>
        <Button type="primary" onClick={handleChange}>
          btn
        </Button>
        <Divider></Divider>
        <Son />
      </div>
    </Provider>
  );
};

export default Context;
