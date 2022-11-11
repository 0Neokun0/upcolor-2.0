import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const ProfileSelect = (props) => {
    const handleChange = (e) => {
        props["set"](
            e.target.value
        )
    }

    return (
        <FormControl fullWidth size="small">
            <InputLabel>{props["label"]}</InputLabel>
            <Select
                label={props["label"]}
                name={props["name"]}
                value={props["value"]}
                onChange={handleChange}
            >
                {
                    props.lists.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                value={item[props["sqlId"]]}
                            >
                                {item[props["sqlName"]]}
                            </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default ProfileSelect
