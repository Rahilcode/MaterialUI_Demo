import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <div id="Gallery">
      <h2>Gallery</h2>
      <ImageList
        sx={{ width: "90%", height: 450, margin: "auto", marginBottom: "1rem" }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 2500, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://img.freepik.com/free-vector/portable-electronics-smart-phone-watch-fitness-bracelet-set-isometric-compositions-isolated_1284-31699.jpg?size=626&ext=jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://img.freepik.com/free-psd/smartwatch-mock-up-with-green-watchstrap_1104-114.jpg?size=338&ext=jpg",
    title: "Burger",
  },
  {
    img: "https://img.freepik.com/free-psd/digital-smart-watch-icon-isolated-3d-render-illustration_439185-11924.jpg?size=338&ext=jpg",
    title: "Camera",
  },
  {
    img: "https://img.freepik.com/free-psd/smartwatch-screen-digital-device-set-banner_53876-113667.jpg?size=626&ext=jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://img.freepik.com/free-vector/smartwatch-applications-tasks-concept-llustration_1284-17017.jpg?size=338&ext=jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148515661.jpg?size=338&ext=jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96810.jpg?size=338&ext=jpg",
    title: "Basketball",
  },
  {
    img: "https://img.freepik.com/free-vector/realistic-smart-watch-mobile-technology-composition-with-synchronization-from-smartphone-watch-vector-illustration_1284-30191.jpg?size=338&ext=jpg",
    title: "Fern",
  },
];
