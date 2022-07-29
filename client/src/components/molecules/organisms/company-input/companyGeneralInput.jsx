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
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import DetailsIcon from "@mui/icons-material/Details";
import CompanyLocationInput from "./companyLocationInput";

export default function CompanyGeneralInput() {
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
                Details
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
                会社名の変更可能です<br></br>メールは変更不可能です。
              </Typography>
            </Popover>
          </div>
        }
        title="会社の詳細"
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
              name="company_name"
              label="企業名"
              color="success"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
              helperText="例: 完全な会社名を入力してください。"
            />
          </div>
          <div>
            <TextField
              disabled
              style={{ width: "40%" }}
              id="filled-disabled"
              label="email"
              name="company_email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              defaultValue="neokun@gmail.com"
              variant="filled"
            />
          </div>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <div>
            <CompanyLocationInput />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
