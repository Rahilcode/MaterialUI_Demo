import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <div id="About">
      <h2>About Us</h2>
      <Grid container spacing={0} p={2}>
        <Grid item xs lg={7}>
          <img
            style={{ width: "-webkit-fill-available" }}
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?size=626&ext=jpg"
            alt="watch image"
          />
        </Grid>
        <Grid item xs lg={5}>
          <h2>Something About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nemo, reiciendis officiis vero animi optio quibusdam ut voluptas
            accusantium ea qui laboriosam? Aperiam quis reiciendis iste quaerat
            inventore laudantium corporis.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
