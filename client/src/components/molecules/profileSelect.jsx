import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const ProfileSelect = (props) => {
    return (
        props["value"]
        &&
        <FormControl fullWidth>
            <InputLabel>
                {props["label"]}
            </InputLabel>

            <Select
                label={props["label"]}
                onChange={props["onChange"]}
                defaultValue={props["value"]}
            >
                {
                    props.items.map((item) => {
                        return (
                            <MenuItem
                                key={item[props["id"]]}
                                value={item[props["id"]]}
                            >
                                {item[props.column]}
                            </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
}

export default ProfileSelect