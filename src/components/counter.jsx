import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";
const Counter = ({ img, end, heading }) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Box
          sx={{
            backgroundColor: "#0e59f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            borderRadius: 20,
          }}
        >
          <Image src={img} />
        </Box>
        <Box>
          <CountUp start={0} end={end} suffix="+">
            {({ countUpRef }) => (
              <div>
                <Typography ref={countUpRef} fontSize={55} fontWeight={600} />
                <Typography
                  textTransform={"uppercase"}
                  color={"#83868d"}
                  fontSize={12}
                  lineHeight={1}
                  fontWeight={700}
                >
                  {heading}
                </Typography>
              </div>
            )}
          </CountUp>
        </Box>
      </Stack>
    </div>
  );
};

export default Counter;
