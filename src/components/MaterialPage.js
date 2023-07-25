import React from "react";
import { Button, Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Products from "./Products";
import About from "./About";
import Faq from "./Faq";
import Gallery from "./Gallery";
import WatchIcon from "@mui/icons-material/Watch";
import ModalNew from "./ModalNew";

const MaterialPage = () => {
  return (
    <div>
      <NavBar />
      <Box
        className="jumbotron"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            position: "absolute",
            top: 170,
            left: 0,
            right: 0,
            margin: "auto",
            marginleft: 5,
            fontWeight: "bold",
            opacity: 0.8,
            padding: "5px",
            borderRadius: 5,
          }}
        >
          <Typography variant="h2" component="h2">
            Welcome To The World
          </Typography>
          <Typography variant="h6" component="h6">
            Of Smart Watches!!
            <WatchIcon />
          </Typography>
          <ModalNew />
        </Box>
        <img
          style={{
            width: "100vw",
            backgroundSize: "cover",
            height: "90vh",
          }}
          src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309652.jpg?size=626&ext=jpg"
          alt=""
        />
      </Box>

      <About />

      <Products />

      <Faq />
      <Gallery />

      <Box sx={{ backgroundColor: "darkgoldenrod", color: "white" }}>
        <Typography component="h6">Copyright © | 2023</Typography>
      </Box>
    </div>
  );
};

export default MaterialPage;
