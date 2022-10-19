import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const ProfileSelect = (props) => {
    const handleChange = (e) => {
        props["set"](
            e.target.value
        )
    }

    return (
        <FormControl fullWidth>
            <InputLabel>{props["label"]}</InputLabel>
            <Select
                label={props["label"]}
                name={props["getName"]}
                value={props["value"]}
                onChange={handleChange}
            >
                {
                    props.lists.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                value={item[props["id"]]}
                            >
                                {item[props["name"]]}
                            </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default ProfileSelect
