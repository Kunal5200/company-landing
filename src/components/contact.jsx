import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HeadingPrefix from "./headingStarter";
import contactImage from "@/images/aboutus1.png";
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <Grid container alignItems={"center"}>
        <Grid item lg={6}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <HeadingPrefix />
            <Typography fontSize={15} fontWeight={550}>
              WELCOME TO OUR COMPANY
            </Typography>
          </Stack>
          <Typography fontSize={45} fontWeight={550} mt={3}>
            We Make Awesome <br /> IT Services For Your
            <br /> Newly Business
          </Typography>{" "}
          <Stack direction={"row"} alignItems={"center"} spacing={5} mt={5}>
            <Button
              sx={{
                border: "1px solid #0e59f2",
                color: "#fff",
                backgroundColor: "#0e59f2",
                borderRadius: 20,
                p: 2,
                ":hover": {
                  color: "#fff",
                  backgroundColor: "#222",
                  border: "1px solid #222",
                },
                fontWeight: 550,
              }}
            >
              Let's Get Started
            </Button>
            <Box>
              <Typography fontWeight={550} color={"#0e50f2"} fontSize={20}>
                Call Us : 9354678205
              </Typography>
              <Typography color={"#8c8f96"} fontWeight={550} fontSize={16}>
                For any question
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item lg={6}>
          <Image src={contactImage} className="image"/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
