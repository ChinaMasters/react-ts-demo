//grandson.js 孙类
import React, { useState } from "react";
import { Consumer } from "./index"; //引入父组件的Consumer容器
import { ConfigProvider, Button, Modal } from "antd";
import styles from "./index.module.scss";

const Grandson = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    // Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
    <Consumer>
      {(name) => (
        <ConfigProvider prefixCls="ant">
          <div className={styles["wrapper"]}>
            <p className={styles["wrapper__item--success"]}>孙组件。获取传递下来的值:{name}</p>
            <p className={styles["wrapper__item--danger"]}>ConfigProvider 效果</p>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <p className={styles["desc"]}> Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值</p>
          </div>
        </ConfigProvider>
      )}
    </Consumer>
  );
};
export default Grandson;
