import { Input } from "antd";
console.log("demo1");

const Demo1 = () => {
  const onChange = (val: any) => {
    console.log(val);
  };
  return (
    <div>
      <h4>demo1</h4>
      {/*  @ts-ignore */}
      <Input onChange={onChange(11)}></Input>
    </div>
  );
};

export default Demo1;
