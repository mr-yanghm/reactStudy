import React from "react";

/**
 * props.children 중요!!!!!
 * @param {*} param0
 */
const Wrapper = ({ children }) => {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };

  return <div style={style}>{children}</div>;
};

export default Wrapper;
