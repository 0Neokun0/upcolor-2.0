import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Popover from "@mui/material/Popover";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import DetailsIcon from "@mui/icons-material/Details";

const TeacherGeneralInput = () => {
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
              <DetailsIcon />
              <Typography variant="caption" color="initial">
                General
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
                ユーザー名前は変更可能です。<br></br>メールは変更不可能です。
              </Typography>
            </Popover>
          </div>
        }
        title="一般"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              style={{ width: "40%" }}
              id="outlined-required"
              name="username"
              label="ユーザー名"
              color="success"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon />
                  </InputAdornment>
                ),
              }}
              helperText="例: iamtheteacher, teacheronclould9, bestofallthefaculty"
            />
          </div>
          <div>
            <TextField
              disabled
              style={{ width: "40%" }}
              id="filled-disabled"
              label="email"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              defaultValue="iamyagisensei@gmail.com"
              variant="filled"
            />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeacherGeneralInput;
