import React from "react";
import Header from "../components/Header";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "56px" }}>{children}</main>
    </>
  );
};

export default HeaderLayout;
