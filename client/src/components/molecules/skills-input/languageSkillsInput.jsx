import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import LanguageIcon from "@mui/icons-material/Language";

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

const LanguageSkills = ["英語", "中国語", "韓国語", "フランス語"];

function getStyles(nameoflanguages, countrylanguages, theme) {
  return {
    fontWeight:
      countrylanguages.indexOf(nameoflanguages) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function LanguageSkillsInput() {
  const theme = useTheme();
  const [countrylanguages, setcountrylanguages] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcountrylanguages(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl
      sx={{ m: 1, width: 300 }}
      color="secondary"
      style={{ width: "40%" }}
    >
      <InputLabel id="demo-multiple-chip-label">言語</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={countrylanguages}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="言語"
            name="languageSkills"
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                color="secondary"
                icon={<LanguageIcon />}
                key={value}
                label={value}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {LanguageSkills.map((nameoflanguages) => (
          <MenuItem
            key={nameoflanguages}
            value={nameoflanguages}
            style={getStyles(nameoflanguages, countrylanguages, theme)}
          >
            {nameoflanguages}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
