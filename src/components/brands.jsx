import { Card } from "@mui/material";
import Image from "next/image";
const Brands = ({ img }) => {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 150,
          boxShadow: "none",
          border: "1px solid #eee",
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          ":hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            transform: "scale(1.002)",
            transition: "scale 0.5s ease-in-out",
          },
        }}
      >
        <Image src={img} />
      </Card>
    </div>
  );
};

export default Brands;
