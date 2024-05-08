import Image from "next/image";
import React, { useState } from "react";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";

const TeamSection = (props) => {
  const [hovered, setHovered] = useState(false);

  const showHovered = () => {
    setHovered(true);
  };

  const hideHovered = () => {
    setHovered(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseOver={showHovered}
      onMouseLeave={hideHovered}
    >
      <Image src={props.img} height={350} className="image" />

      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 35,
          backgroundColor: "#fff",
          width: 200,
          height: 140,
          borderRadius: 2,
          p: 1,
          transform: hovered ? "translateY(0)" : "translateY(150%)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.5s ease-in-out,opacity 0.5s ease-in-out",
          zIndex: hovered ? 9999 : -99,
        }}
      >
        <Typography fontSize={18} textAlign={"center"} fontWeight={550} mt={2}>
          {props.name}
        </Typography>
        <Typography color={"#0e59f2"} textAlign={"center"} fontSize={14}>
          {props.designation}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container>
          {props.socialAccounts.map((val, i) => (
            <Grid item key={i} lg={3} textAlign={"center"}>
              <IconButton
                sx={{
                  border: "1px solid #eff1f5",
                  backgroundColor: "#eff1f5",
                  width: 30,
                  height: 30,
                  ":hover": {
                    backgroundColor: "#0e59f2",
                    color: "#fff",
                  },
                  color: "#0e59f2",
                  transition: "0.5s ease all",
                }}
                key={i}
              >
                {val.icon}
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TeamSection;
