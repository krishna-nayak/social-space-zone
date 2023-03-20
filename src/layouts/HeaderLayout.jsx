import React from "react";
import Header from "../components/Header";

const HeaderLayout = ({ children }) => {
  // console.log(window.location.href);
  return (
    <>
      <Header />
      <main style={{ paddingTop: "56px" }}>{children}</main>
    </>
  );
};

export default HeaderLayout;
