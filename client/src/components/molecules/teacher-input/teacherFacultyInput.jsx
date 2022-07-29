import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Typography,
  Popover,
} from "@mui/material";
import { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import React from "react";

const courses = [
  {
    value: "honka",
    label: "本科",
  },
  {
    value: "networking",
    label: "情報処理・ネットワーク専攻",
  },
  {
    value: "game",
    label: "ゲーム専攻",
  },
  {
    value: "design",
    label: "デザイン専・イラスト専攻",
  },
  {
    value: "hardware",
    label: "ハードウェア専攻",
  },
  {
    value: "globalit",
    label: "グローバルIT",
  },
];

export default function TeacherFacultyInput() {
  const [course, setcourse] = useState("honka");

  const handleChange = (event) => {
    setcourse(event.target.value);
  };

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
              <HistoryEduIcon />
              <Typography variant="caption" color="initial">
                Faculty
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
                担当している学部を選択してください。
              </Typography>
            </Popover>
          </div>
        }
        title="学部担当"
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
              id="outlined-select-course"
              style={{ width: "40%" }}
              select
              label="専攻の選択"
              color="success"
              name="course"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
              value={course}
              onChange={handleChange}
              helperText="入力フィールドは必須です"
            >
              {courses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
