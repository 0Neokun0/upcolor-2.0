import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TerminalIcon from "@mui/icons-material/Terminal";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ToolsAndFrameWork = [
  "Git",
  "Adobe",
  "Unity",
  "React",
  "Laravel",
  "AWS",
  "Ruby on Rails",
  "Numpy",
  "Vue.js",
  ".NET Framework",
];

function getStyles(ToolsFramework, ToolsAndFrameWorkNames, theme) {
  return {
    fontWeight:
      ToolsAndFrameWorkNames.indexOf(ToolsFramework) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ToolsAndFrameWorkInput() {
  const theme = useTheme();
  const [ToolsAndFrameWorkNames, setToolsAndFrameWorkNames] = React.useState(
    []
  );

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setToolsAndFrameWorkNames(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: 300 }}
        style={{ width: "40%" }}
        color="error"
      >
        <InputLabel id="demo-multiple-chip-label">
          ツール &nbsp;&bull;&nbsp; フレームワーク
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={ToolsAndFrameWorkNames}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="ツール &nbsp;&bull;&nbsp; フレームワーク"
              name="programmingToolsAndFramework"
            />
          }
          renderValue={(selected) => (
            <Box
              color="error"
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
            >
              {selected.map((value) => (
                <Chip
                  color="error"
                  icon={<TerminalIcon />}
                  key={value}
                  label={value}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {ToolsAndFrameWork.map((ToolsFramework) => (
            <MenuItem
              key={ToolsFramework}
              value={ToolsFramework}
              style={getStyles(ToolsFramework, ToolsAndFrameWorkNames, theme)}
            >
              {ToolsFramework}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
