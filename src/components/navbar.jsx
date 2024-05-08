import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "@/images/tronix-logo.svg";
import Image from "next/image";
import { routes } from "@/assets/routes";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ position: "relative " }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pt={3}
          sx={{ position: "absolute",width:"96%" }}
        >
          <Image src={logo} />
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            {routes.map((val, i) => {
              return (
                <Link href={val.url} key={i} className="link">
                  <Typography fontWeight={550} fontSize={15}>
                    {val.name}
                  </Typography>
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
