import * as React from "react";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { InputAdornment, TextField } from "@mui/material";

const StudentYearInput = () => {
  const [studentYear, setstudentYear] = React.useState("");

  const handleChange = (event) => {
    setstudentYear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FormatListNumberedIcon />
              </InputAdornment>
            ),
          }}
          style={{ width: "40%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="warning"
          name="studentYear"
          value={studentYear}
          label="学年"
          select
          onChange={handleChange}
          helperText="1,2,3,4年"
        >
          <MenuItem value={1}>1 年</MenuItem>
          <MenuItem value={2}>2 年</MenuItem>
          <MenuItem value={3}>3 年</MenuItem>
          <MenuItem value={4}>4 年</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}

export default StudentYearInput;