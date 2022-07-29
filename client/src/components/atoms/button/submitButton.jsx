import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from '@mui/icons-material/Publish';

export default function SubmitButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        variant="outlined"
        type="submit"
        color="success"
        size="large"
        onClick={() => {
          setOpen(true);
        }}
        endIcon={<PublishIcon />}
      >
        確定
      </Button>
    </Box>
  );
}
