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
import { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import React from "react";
import axios from "axios";
import StudentYearInput from "./studentYearInput";

export default function StudentCourseInput() {
  const [course, setcourse] = useState("");
  const [studentCourse, setstudentCourse] = useState([]);

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

  useEffect(() => {
    axios.post("/course/course").then((res) => {
      setstudentCourse(res.data);
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
              <HistoryEduIcon />
              <Typography variant="caption" color="initial">
                Course
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
                1年生の学生方は本科生として選択してください。
              </Typography>
            </Popover>
          </div>
        }
        title="専攻情報"
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
              {studentCourse.map((option) => (
                <MenuItem key={option["course_id"]} value={option["course_id"]}>
                  {option["course_name"]}
                </MenuItem>
              ))}
            </TextField>
            
          </div>
        </Box>
        <Divider sx={{ mt: 5, mb: 5 }} />
        <StudentYearInput/>
      </CardContent>
    </Card>
  );
}
