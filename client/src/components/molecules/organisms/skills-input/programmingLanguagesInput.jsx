import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CodeIcon from "@mui/icons-material/Code";

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

const programminglanguages = [
  "C言語",
  "C#",
  "C++",
  "PHP",
  "HTML5/CSS3",
  "JavaScript",
  "Java",
  "Python",
  "SQL",
  "Visual Basic(VB, VBA)",
  "Ruby",
];

function getStyles(nameoflanguages, computerlanguages, theme) {
  return {
    fontWeight:
      computerlanguages.indexOf(nameoflanguages) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ProgrammingLanguagesInput() {
  const theme = useTheme();
  const [computerlanguages, setcomputerlanguages] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcomputerlanguages(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl
      sx={{ m: 1, width: 300 }}
      style={{ width: "40%" }}
      color="info"
    >
      <InputLabel id="demo-multiple-chip-label">技術言語</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={computerlanguages}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="技術言語"
            name="programmingLanguage"
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                color="info"
                icon={<CodeIcon />}
                key={value}
                label={value}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {programminglanguages.map((nameoflanguages) => (
          <MenuItem
            key={nameoflanguages}
            value={nameoflanguages}
            style={getStyles(nameoflanguages, computerlanguages, theme)}
          >
            {nameoflanguages}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
