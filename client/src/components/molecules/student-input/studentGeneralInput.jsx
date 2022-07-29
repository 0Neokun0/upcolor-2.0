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
import React, { useState, useEffect } from "react";
import axios from "axios";
import Popover from "@mui/material/Popover";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import DetailsIcon from "@mui/icons-material/Details";

const StudentGeneralInput = () => {
  const [studentEmail, setStudentEmail] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    axios.post("/account/studentEmail").then((res) => {
      setStudentEmail(res.data);
      console.log(res.data);
    });
  }, [axios]);

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
              helperText="例: chastiy5, speeeedy544, neokun92"
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
              value={studentEmail}
              variant="filled"
            />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StudentGeneralInput;