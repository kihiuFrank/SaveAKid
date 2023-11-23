import React from "react";

const PageContainer = (props) => {
  return (
    <div
      className={`container mt-32 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default PageContainer;
