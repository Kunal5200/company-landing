import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./scrolltoTop";

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScroll && <ScrollToTop onClick={scrollToTop} />}
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
