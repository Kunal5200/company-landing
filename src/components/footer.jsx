import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box className="bg-footer" sx={{ mt: 10 }}>
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <Typography
          fontSize={45}
          color={"#fff"}
          fontWeight={550}
          textAlign={"center"}
          mt={3}

        >
          About Us
        </Typography>
        <Typography fontSize={16} letterSpacing={1} lineHeight={1.5} mt={3} color={"#fff"} textAlign={"center"}>
          An IT consultancy can help you assess your technology needs and <br />
          develop a technology strategy that aligns with your business
        </Typography>
        <Stack direction="row" alignItems={"center"}></Stack>
      </Container>
    </Box>
  );
};

export default Footer;
