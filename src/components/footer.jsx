import data from "@/assets/data";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import FooterBox from "./footerBox";

const Footer = () => {
  const socialIcons = [
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaLinkedinIn />,
    },
  ];
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
        <Typography
          fontSize={16}
          letterSpacing={1}
          lineHeight={1.5}
          mt={3}
          color={"#fff"}
          textAlign={"center"}
        >
          An IT consultancy can help you assess your technology needs and <br />
          develop a technology strategy that aligns with your business
        </Typography>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          spacing={4}
          mt={3}
        >
          {socialIcons.map((val, i) => (
            <IconButton
              sx={{
                border: "1px solid #152B54",
                color: "#fff",
                backgroundColor: "#152B54",
                fontSize: 20,
                p: 2,
                ":hover": {
                  color: "#152B54",
                  backgroundColor: "#fff",
                  border: "1px solid #fff",
                },
                transition: "0.5s ease-in-out",
              }}
              key={i}
            >
              {val.icon}
            </IconButton>
          ))}
        </Stack>
      </Container>
      <Box sx={{ borderTop: "1px solid #eee", mt: 5 }}>
        <Container maxWidth="lg">
          <Grid container mt={5} alignItems={"center"}>
            {data.footerSection.map((val, i) => (
              <Grid item lg={4} key={i} >
                <FooterBox
                  icon={val.icon}
                  description={val.description}
                  heading={val.heading}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
