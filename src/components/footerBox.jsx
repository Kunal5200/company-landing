import { LocationOnOutlined } from "@mui/icons-material";
import { Stack, IconButton, Box, Typography } from "@mui/material";
import React from "react";

const FooterBox = (props) => {
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={3}
        justifyContent={"center"}
      >
        <IconButton
          sx={{
            color: "#fff",
            border: "1px solid #152B54",
            backgroundColor: "#152B54",
            p: 2,
            ":hover": {
              backgroundColor: "#fff",
              color: "#152B54",
              border: "1px solid #152B54",
              cursor: "default",
            },
            transition: " 0.5s ease-in-out",
          }}
        >
          {props.icon}
        </IconButton>
        <Box>
          <Typography fontSize={15} fontWeight={550} color={"#fff"}>
            {props.heading}
          </Typography>
          <Typography fontSize={17} color="#fff" mt={1}>
            {props.description}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default FooterBox;
