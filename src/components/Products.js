import React from "react";
import { Box, Grid } from "@mui/material";
import CardNew from "./CardNew";

const Products = () => {
  const image = [
    "https://img.freepik.com/free-vector/isometric-portable-smart-watch-concept_1284-37884.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/realistic-fitness-tracker-concept_52683-38272.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/realistic-style-fitness-trackers_23-2148509776.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-psd/smartwatch-mock-up-with-green-watchstrap_1104-114.jpg?size=338&ext=jpg",
  ];
  return (
    <div id="Products">
      <Box class="candles" mt={2} mb={2}>
        <h2>Products</h2>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          container
          spacing={2}
          p={2}
        >
          <Grid p={2} md={4}>
            <CardNew image={image[3]} title={"Watch One"} />
          </Grid>
          <Grid p={2} md={4}>
            <CardNew image={image[1]} title={"Watch Two"} />
          </Grid>
          <Grid p={2} md={4}>
            <CardNew image={image[2]} title={"Watch Three"} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
