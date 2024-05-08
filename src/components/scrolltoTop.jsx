import { ArrowUpward } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

const ScrollToTop = (props) => {
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
    <Box sx={{}}>
      <IconButton
        sx={{
          position: "fixed",
          right: 20,
          top: "80%",
          border: "1px solid #105AF2",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#105AF2",
          ":hover": {
            backgroundColor: "#105AF2",
          },
        }}
        onClick={props.onClick}
      >
        <ArrowUpward htmlColor="#fff" />
      </IconButton>
    </Box>
  );
};

export default ScrollToTop;
