import { useState, useEffect } from "react";
import { Button } from "antd";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

const Home = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Button onClick={() => handleClick()}>Toggle</Button>
      {show ? <Demo1></Demo1> : <Demo2></Demo2>}
    </div>
  );
};

export default Home;
