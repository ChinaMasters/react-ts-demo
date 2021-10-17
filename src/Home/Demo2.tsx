import { useEffect } from "react";
console.log("demo2");

const Demo2 = () => {
  useEffect(() => {
    console.log("demo2 useEffect");
  }, []);
  return <h4>demo2</h4>;
};

export default Demo2;
