import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalNew from "./ModalNew";

export default function CardNew({ image, title }) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia sx={{ height: "45vh" }} image={image} title="green iguana" />
      <CardContent>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 3,
            whiteSpace: "nowrap",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A smartwatch is a wearable computer in the form of a watch; modern
          smartwatches provide a local touchscreen interface for daily use,
          while an associated.
        </Typography>
      </CardContent>
      <CardActions>
        <ModalNew />
        <Button
          sx={{ marginLeft: "4px" }}
          size="small"
          variant="contained"
          color="success"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
