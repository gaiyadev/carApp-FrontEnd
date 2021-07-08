import React from "react";
import Navbar from "../../components/default/navbar/navbar";

const Default = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Default;
