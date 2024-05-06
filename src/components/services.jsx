import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
const Services = (props) => {
  return (
    <div>
      <Card
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
          p: 6,
          ":hover": {
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          },
          transition: "0.5s ease all",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e6eefe",
            width: 100,
            height: 100,
            borderRadius: 3,
          }}
        >
          <Image
            src={props.img}
            className="animate__animated animate__pulse animate__infinite	infinite"
          />
        </Box>
        <Typography mt={5} fontSize={20} fontWeight={700}>
          {props.heading1} <br /> {props.heading2}
        </Typography>
        <Typography mt={2} color={"grey"} fontSize={15}>
          {props.description}
        </Typography>
      </Card>
    </div>
  );
};

export default Services;
