import { Box, Typography } from "@mui/material";
import React from "react";

const SubFooter = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#0B2048", p: 3 }}>
        <Typography color={"#fff"} fontSize={18} fontWeight={550} textAlign={"center"} letterSpacing={1}>
          Copyright © 2023. All Rights Reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default SubFooter;
