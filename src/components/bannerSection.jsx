import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import bannerSection from "../../public/images/bannerImage.png";
import Image from "next/image";
const BannerSection = () => {
  return (
    <React.Fragment>
      <div className="backgroundImage">
        <Container maxWidth="lg" sx={{ pt: 7, margin: "auto" }}>
          <Grid container alignItems={"center"}>
            <Grid
              item
              lg={6}
              className="animate__animated animate__slideInLeft"
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Box
                  sx={{
                    backgroundColor: "#0e59f2",
                    width: 8,
                    height: 8,
                    borderRadius: 0.4,
                  }}
                ></Box>
                <Typography fontSize={12} letterSpacing={2} fontWeight={600}>
                  WELCOME TO OUR COMPANY
                </Typography>
              </Stack>
              <Box mt={2}>
                <Typography fontSize={60} fontWeight={600} lineHeight={1}>
                  Clear Thinking
                </Typography>
                <Typography fontSize={60} fontWeight={600} lineHeight={1.5}>
                  Makes{" "}
                  <Typography fontWeight={100} variant="span" color={"#0e59f2"}>
                    Bright
                  </Typography>
                </Typography>
                <Typography
                  color={"#0e59f2"}
                  fontWeight={100}
                  fontSize={60}
                  lineHeight={1}
                >
                  Future!
                </Typography>
                <Typography mt={3} color={"#8a8c94"}>
                  Clear thinking serves as the roadmap to a brighter future,
                  guiding decisions with clarity and purpose. By fostering
                  rationality and logic, individuals can navigate challenges and
                  seize opportunities, ultimately shaping their destinies
                  towards success and fulfillment.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              textAlign={"end"}
              className="animate__animated animate__slideInRight"
            >
              <Image src={bannerSection} className="banner_image" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BannerSection;
