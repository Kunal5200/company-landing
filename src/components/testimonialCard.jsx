import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import client from "@/images/testimonial/img1.jpg";
const TestimonialCard = ({ testimonials, img, name, designation }) => {
  return (
    <div>
      <Card sx={{ width: "100%", borderRadius: 3 }}>
        <Typography p={5} fontSize={16} color={"#a8aaaf"} lineHeight={2}>
          {testimonials}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#eff1f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={3} p={4}>
            <Image src={img} className="testi_image" />
            <Box>
              <Typography fontSize={18} color={"#000"} fontWeight={550}>
                {name}
              </Typography>
              <Typography color={"#2065f2"} fontSize={15}>
                {designation}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Card>
    </div>
  );
};

export default TestimonialCard;
