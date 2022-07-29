import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  TextField,
  InputAdornment,
  Typography,
  Popover,
  IconButton,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";

const StudentIntroductionInput = () => {
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
              <BadgeIcon />
              <Typography variant="caption" color="initial">
                Introduce
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
                UpColorプラットフォームでチーム活動や就活するため、<br></br>
                自己紹介を入力することが重要です。
              </Typography>
            </Popover>
          </div>
        }
        title="自己アピール &nbsp;&bull;&nbsp; 自己紹介"
      />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          color="success"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          sx={{ m: 1 }}
          id="outlined-textarea"
          name="studentSelfIntroduction"
          label="情報技術の使用法と経験に関連する何かを書いてください。"
          rows={4}
          multiline
          helperText="入力フィールドは必須です"
        />
      </CardContent>
    </Card>
  );
}

export default StudentIntroductionInput;