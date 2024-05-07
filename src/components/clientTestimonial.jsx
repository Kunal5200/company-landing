import { Box, Container, Stack, Typography } from "@mui/material";
import HeadingPrefix from "./headingStarter";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialCard";
import "swiper/css";
import data from "@/assets/data";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const ClientTestimonial = () => {
  return (
    <div className="client_bg">
      <Container maxWidth="lg">
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <HeadingPrefix />
          <Typography color={"#fff"} fontSize={15} fontWeight={550}>
            CLIENT TESTIMONIAL
          </Typography>
        </Stack>
        <Typography fontSize={40} mt={3} color={"#fff"} fontWeight={600}>
          About Customer Stories
        </Typography>
        <Box mt={5}>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
          >
            {data.testimonials.map((val, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard
                  img={val.img}
                  testimonials={val.testimonials}
                  name={val.name}
                  designation={val.designation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default ClientTestimonial;
