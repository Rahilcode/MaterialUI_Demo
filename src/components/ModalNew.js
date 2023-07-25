import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function ModalNew() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color="secondary" variant="contained" onClick={handleOpen}>
        Share
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share With Others
          </Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <FacebookShareButton
              url={"https://www.google.com"}
              quote={"Dummy text!"}
              hashtag="#muo"
            >
              <FacebookIcon size={40} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={"https://www.example.com"}
              quote={"Dummy text!"}
              hashtag="#muo"
            >
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={"https://www.linkedin.com"}
              quote={"Some text"}
              hashtag="linkedin"
            >
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
            <RedditShareButton
              url={"https://www.linkedin.com"}
              quote={"Some text"}
              hashtag="linkedin"
            >
              <RedditIcon size={40} round />
            </RedditShareButton>
            <EmailShareButton subject="Testing Subject">
              <EmailIcon size={40} round />
            </EmailShareButton>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
