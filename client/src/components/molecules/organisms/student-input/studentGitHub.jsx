import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  TextField,
  Typography,
  Popover,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function StudentGitHub() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Card>
      <CardHeader
        action={
          <div>
            <IconButton
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <GitHubIcon />
              <Typography variant="caption" color="initial">
                GitHub
              </Typography>
            </IconButton>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                githubアカウントのリンク<br></br>を入力します。
              </Typography>
            </Popover>
          </div>
        }
        title="GitHub"
      />
      <Divider />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <GitHubIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            style={{ width: "40%" }}
            id="input-with-sx"
            label="プロファイルリンク"
            variant="standard"
            name="githubLink"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
