import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
const Layout = ({ children }) => {

  return (
    <div className="bg-[#0C0C0C]  relative">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
